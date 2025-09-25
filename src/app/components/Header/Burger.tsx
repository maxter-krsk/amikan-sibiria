"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import t from "@/app/styles/modules/typography.module.css";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="desk:hidden">
      {/* Когда меню закрыто — кнопка стоит в потоке */}
      {!isOpen && (
        <button onClick={toggleMenu}>
          <div className="w-[3.125rem] h-[3.125rem] bg-sand rounded-full flex flex-col justify-center items-center gap-[0.25rem]">
            <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
            <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
            <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
            <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          </div>
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col gap-[1.875rem] bg-beige fixed z-10 top-0 right-0 md:w-[50%] w-full h-full p-[1.25rem]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/icons/logos/logo-dark.svg"
                alt="Логотип Амикан"
                width={50}
                height={50}
              />
            </Link>

            {/* Когда меню открыто — кнопка уже внутри контейнера */}
            <button onClick={toggleMenu}>
              <div className="w-[3.125rem] h-[3.125rem] bg-sand rounded-full flex items-center justify-center relative">
                <span className="absolute w-[1.25rem] h-[0.1rem] bg-beige rotate-45"></span>
                <span className="absolute w-[1.25rem] h-[0.1rem] bg-beige -rotate-45"></span>
              </div>
            </button>
          </div>
          <nav>
            <ul
              className={`${t["body-lg"]} flex flex-col gap-[0.625rem] text-darkGreen`}
            >
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
            className={`${t.subtitle} mt-[1.875rem] text-center uppercase font-semibold text-beige px-[1.9rem] py-[1.3rem] bg-sand rounded-[6.2rem]`}
          >
            Оставить заявку
          </Link>
        </div>
      )}
    </div>
  );
}
