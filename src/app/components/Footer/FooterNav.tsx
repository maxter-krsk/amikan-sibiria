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
              <Link className="underline-animation" href="/#about">О туре</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#features">Преимущества</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#program">Программа</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#gallery">Галерея</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#feedbacks">Отзывы</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#faq">FAQ</Link>
            </li>
            <li>
              <Link className="underline-animation" href="/#contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
