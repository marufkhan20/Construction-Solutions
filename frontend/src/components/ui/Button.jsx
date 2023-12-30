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
    "bg-grey text-white hover:border-grey hover:bg-transparent hover:text-grey"
  } ${variant === "secondary" && "bg-tranparent text-grey"}`;

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
