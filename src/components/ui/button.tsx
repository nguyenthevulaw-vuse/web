import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

// Màu chữ chọn theo độ sáng của nền để đạt tương phản WCAG AA ~4.5:1:
// nút primary (xanh lá, nền tối) dùng chữ trắng; nút secondary (cam, nền
// sáng) dùng chữ ink (navy đậm) vì chữ trắng trên nền cam không đủ tương phản.
const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:brightness-95 shadow-sm shadow-primary/20",
  secondary: "bg-accent text-ink hover:brightness-95 shadow-sm shadow-accent/20",
  outline: "border-2 border-ink/15 text-ink hover:border-primary-dark hover:text-primary-dark",
  ghost: "text-ink hover:bg-ink/5",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  type?: undefined;
  onClick?: undefined;
  disabled?: undefined;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  target?: undefined;
  rel?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
