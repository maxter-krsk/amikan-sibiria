import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";

export default function FooterNav() {
  return (
    <nav>
      <nav>
        <ul className="text-beige flex flex-col gap-[1.2rem]">
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
    </nav>
  );
}
