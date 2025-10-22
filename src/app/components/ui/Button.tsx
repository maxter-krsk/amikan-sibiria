import t from "@/app/styles/modules/button.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CommonProps = {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
export function Button(props: ButtonProps) {
  const classes = cn(`${t["btn"]} cursor-pointer`, props.className);

  if ("href" in props && props.href) {
    const { href, children, className, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { children, className, ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
