export function PageBackgroundGlow() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-0 h-[840px] overflow-hidden z-0"
      >
        {/* Contenedor centrado con la referencia de 1440px */}
        <div className="relative max-w-[1440px] mx-auto h-full">
          {/* Elipse 1 (izquierda): un poco más centrada y con tono ligeramente más presente */}
          <div
            className="absolute -top-[690px] -left-[520px] sm:-left-[420px] lg:-left-[340px] w-[1400px] sm:w-[1900px] lg:w-[2330px] h-[1282px] rounded-[550px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(134, 169, 244, 0.72) 0%, rgba(178, 202, 249, 0.36) 56%, rgba(243, 247, 255, 0) 100%)",
            }}
          />
  
          {/* Elipse 2 (derecha): un poco más centrada detrás del bloque visual y con mayor presencia */}
          <div
            className="absolute -top-[11490px] -right-[1120px] sm:-right-[900px] lg:-right-[720px] w-[2600px] sm:w-[3200px] lg:w-[3766px] h-[12264px] rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(122, 161, 242, 0.76) 0%, rgba(172, 198, 248, 0.38) 62%, rgba(243, 247, 255, 0) 100%)",
            }}
          />
        </div>
      </div>
    );
  }