import Link from "next/link";

type FooterNavProps = {
  className?: string;
};
export default function FooterNav({ className }: FooterNavProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col">
        <nav className="text-beige text-14 desk:text-18">
          <ul className="flex flex-col gap-10 md:gap-20">
            <li>
              <Link href="/#about">О туре</Link>
            </li>
            <li>
              <Link href="/#features">Преимущества</Link>
            </li>
            <li>
              <Link href="/#program">Программа</Link>
            </li>
            <li>
              <Link href="/#gallery">Галерея</Link>
            </li>
            <li>
              <Link href="/#feedbacks">Отзывы</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
            <li>
              <Link href="/#contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
