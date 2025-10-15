import Link from "next/link";

type FooterPolicyProps = {
  className?: string;
};

export default function FooterPolicy({ className }: FooterPolicyProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-10 text-beige text-12 lg:text-14 relative z-20 w-fit">
        <Link
          className="w-fit block pointer-events-auto underline-animation"
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Политика конфиденциальности
        </Link>
        <Link
          className="w-fit block pointer-events-auto underline-animation"
          href="/provide-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Политика обработки персональных данных
        </Link>
        <Link
          className="w-fit block pointer-events-auto underline-animation"
          href="/cookie-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Политика использования cookie
        </Link>
        <Link
          className="w-fit block pointer-events-auto underline-animation"
          href="/terms-user"
          target="_blank"
          rel="noopener noreferrer"
        >
          Пользовательское соглашение
        </Link>
      </div>
    </div>
  );
}
