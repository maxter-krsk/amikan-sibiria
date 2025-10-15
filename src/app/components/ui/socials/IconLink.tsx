import Link from "next/link";
import { cn } from "@/lib/utils";

type IconLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
};

export function IconLink({ href, label, icon, className }: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex h-[2.69rem] w-[2.69rem] items-center justify-center rounded-full bg-sand hover:bg-lightGreen transition-colors duration-500",
        className
      )}
    >
      {icon}
    </Link>
  );
}
