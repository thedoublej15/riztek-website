import { NextResponse } from "next/server";

interface ContactPayload {
  nombre?: string;
  empresa?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
  turnstileToken?: string;
  website?: string; // Honeypot anti-bots
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // 1. Verificar honeypot invisible
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const nombre = (body.nombre ?? "").trim();
    const empresa = (body.empresa ?? "").trim();
    const correo = (body.correo ?? "").trim();
    const telefono = (body.telefono ?? "").trim();
    const mensaje = (body.mensaje ?? "").trim();
    const turnstileToken = (body.turnstileToken ?? "").trim();

    // 2. Validación de campos obligatorios
    if (!nombre || !empresa || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Por favor completa todos los campos obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Por favor completa la verificación de seguridad." },
        { status: 400 }
      );
    }

    // 3. Validar variables de entorno
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.CONTACT_SENDER_EMAIL;
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "hola@riztek.com.mx";

    if (!turnstileSecret || !brevoApiKey || !senderEmail) {
      console.error("Faltan variables de entorno en /api/contacto");
      return NextResponse.json(
        {
          error:
            "El servicio de correo no está configurado en el servidor. Intenta más tarde.",
        },
        { status: 500 }
      );
    }

    // 4. Verificar token con Cloudflare Turnstile
    const turnstileForm = new URLSearchParams();
    turnstileForm.append("secret", turnstileSecret);
    turnstileForm.append("response", turnstileToken);

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: turnstileForm.toString(),
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json(
        {
          error:
            "La verificación de seguridad expiró o no es válida. Intenta de nuevo.",
        },
        { status: 400 }
      );
    }

    // 5. Enviar correo mediante Brevo API v3
    const safeNombre = escapeHtml(nombre);
    const safeEmpresa = escapeHtml(empresa);
    const safeCorreo = escapeHtml(correo);
    const safeTelefono = telefono ? escapeHtml(telefono) : "No proporcionado";
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br />");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F3F7FF; padding: 32px 16px; color: #0F172A;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 20px; border: 1px solid #E2E8F0; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #235FE3 0%, #143B99 100%); padding: 28px 32px; color: #FFFFFF;">
            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85;">
              NUEVO CONTACTO WEB · RIZTEK
            </p>
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">
              Solicitud de proyecto de ${safeNombre}
            </h1>
          </div>

          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B; width: 140px;"><strong>Nombre:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${safeNombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B;"><strong>Empresa:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${safeEmpresa}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B;"><strong>Correo:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #1E4FB8;">
                  <a href="mailto:${safeCorreo}" style="color: #1E4FB8; text-decoration: none;">${safeCorreo}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #64748B;"><strong>Teléfono:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F1F5F9; color: #0F172A;">${safeTelefono}</td>
              </tr>
            </table>

            <div style="background-color: #F8FAFC; border-radius: 14px; padding: 18px 20px; border: 1px solid #E2E8F0;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B;">
                Detalle del requerimiento
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #1E293B;">
                ${safeMensaje}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Riztek Web",
          email: senderEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: "Equipo Riztek",
          },
        ],
        replyTo: {
          email: correo,
          name: nombre,
        },
        subject: `Nuevo proyecto: ${empresa} (${nombre})`,
        htmlContent,
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Error de Brevo:", errorText);
      return NextResponse.json(
        {
          error:
            "No pudimos enviar tu mensaje en este momento. Intenta de nuevo o escríbenos por WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error inesperado en /api/contacto:", error);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado al procesar tu solicitud." },
      { status: 500 }
    );
  }
}