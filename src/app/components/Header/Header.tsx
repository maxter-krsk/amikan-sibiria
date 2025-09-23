import Link from "next/link";
import Image from "next/image";
import t from "@/app/styles/modules/typography.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center py-[1.2rem]">
          <Link href="/">
            <Image
              src="/icons/logos/logo-light.svg"
              alt="Логотип Амикан"
              width={64}
              height={64}
            ></Image>
          </Link>
          <nav className="px-[1.9rem] py-[1.3rem] bg-beige rounded-[6.2rem]">
            <ul className={`${t["body-lg"]} flex gap-[1.2rem] text-darkGreen`}>
              <li>
                <Link href="/">О туре</Link>
              </li>
              <li>
                <Link href="/">Преимущества</Link>
              </li>
              <li>
                <Link href="/">Программа</Link>
              </li>
              <li>
                <Link href="/">Галерея</Link>
              </li>
              <li>
                <Link href="/">Отзывы</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Контакты</Link>
              </li>
            </ul>
          </nav>
          <Link
            href="/"
            className={`${t.subtitle} uppercase font-semibold text-beige px-[1.9rem] py-[1.3rem] bg-sand rounded-[6.2rem]`}
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </header>
  );
}
