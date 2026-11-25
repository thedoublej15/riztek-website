import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "blue" | "white";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type LinkButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type HeroButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "text-slate-900 bg-white shadow-lg shadow-blue-950/20 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-blue-50",
  secondary:
    "text-slate-900 bg-white/30 backdrop-blur-sm lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-white/80",
  blue:
    "text-white bg-[#1E4FB8] shadow-[0_10px_24px_-6px_rgba(30,79,184,0.38)] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#173e93]",
  white:
    "text-slate-900 bg-white border border-slate-200/80 shadow-[0_6px_20px_-6px_rgba(8,27,75,0.08)] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-slate-50 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8]/40",
};

export function HeroButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: HeroButtonProps) {
  const baseClasses =
    "group btn-motion w-full sm:w-fit max-w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-center text-sm font-semibold leading-snug select-none lg:[@media(hover:hover)_and_(pointer:fine)]:[&_svg]:transition-transform lg:[@media(hover:hover)_and_(pointer:fine)]:[&_svg]:duration-300 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:[&_svg]:translate-x-0.5";

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    return (
      <Link className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} {...props}>
      {children}
    </button>
  );
}