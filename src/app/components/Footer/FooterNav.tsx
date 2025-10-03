import Link from "next/link";

type FooterNavProps = {
  className?: string;
};
export default function FooterNav( { className }: FooterNavProps) {
  return (
    <div className="flex flex-col">
      <nav className="text-beige text-[0.87rem] desk:text-[1.12rem]">
        <ul className="flex flex-col gap-[0.62rem] md:gap-[1.25rem]">
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
      <span className="mt-auto text-beige text-[1.12rem]">
        &copy; Amikan Travel, {new Date().getFullYear()}
      </span>
    </div>
  );
}
