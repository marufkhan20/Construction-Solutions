import { cn } from "@/lib/utills";
import Link from "next/link";

const Button = ({
  type = "button",
  className = "",
  onClick,
  variant = "primary",
  href,
  children,
}) => {
  const styles = `px-9 transition-all border border-transparent py-3 font-semibold text-sm ${
    variant === "primary" &&
    "bg-primary text-white hover:border-primary hover:bg-transparent hover:text-primary"
  } ${variant === "secondary" && "bg-tranparent text-primary"}`;

  return href ? (
    <Link href={href} className={cn(styles, className)}>
      {children}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={cn(styles, className)}>
      {children}
    </button>
  );
};

export default Button;
