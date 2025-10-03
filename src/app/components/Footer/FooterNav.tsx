import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="text-beige desk:text-[1.12rem] mtext-[0.87rem]">
      <ul className="flex flex-col gap-[1.2rem]">
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
  );
}
