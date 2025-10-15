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
              <Link href="#">О туре</Link>
            </li>
            <li>
              <Link href="#">Преимущества</Link>
            </li>
            <li>
              <Link href="#">Программа</Link>
            </li>
            <li>
              <Link href="#">Галерея</Link>
            </li>
            <li>
              <Link href="#">Отзывы</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
