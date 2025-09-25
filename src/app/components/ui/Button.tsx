import t from "@/app/styles/modules/button.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
};
export function Button({
  href,
  type = "button",
  children,
  className,
}: ButtonProps) {
  const classes = cn(`${t["btn"]} cursor-pointer`, className);

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
