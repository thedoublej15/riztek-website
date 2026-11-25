import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  showArrow?: boolean;
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

type SectionButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "text-white bg-[#1E4FB8] shadow-sm shadow-[#1E4FB8]/20 lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#173e93]",
  secondary:
    "text-slate-800 bg-white border border-slate-300/90 shadow-xs lg:[@media(hover:hover)_and_(pointer:fine)]:hover:border-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:text-[#1E4FB8] lg:[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#F3F7FF]",
};

export function SectionButton({
  variant = "primary",
  showArrow = true,
  className = "",
  children,
  ...props
}: SectionButtonProps) {
  const baseClasses =
    "group btn-motion inline-flex items-center justify-center gap-2 w-full sm:w-fit max-w-full px-6 py-3 rounded-full text-center text-xs sm:text-sm font-semibold leading-snug select-none [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-out lg:[@media(hover:hover)_and_(pointer:fine)]:hover:[&_svg]:translate-x-1";

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 shrink-0" />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <Link className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} {...props}>
      {content}
    </button>
  );
}