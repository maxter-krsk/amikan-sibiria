import Link from "next/link";

type FooterPolicyProps = {
  className?: string;
};

export default function FooterPolicy({ className }: FooterPolicyProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-10 text-beige text-12 lg:text-14">
        <Link href="/privacy-policy">Политика конфиденциальности</Link>
        <Link href="#">Политика обработки персональных данных</Link>
        <Link href="#">Политика использования cookie</Link>
        <Link href="#">Пользовательское соглашение</Link>
      </div>
    </div>
  );
}
