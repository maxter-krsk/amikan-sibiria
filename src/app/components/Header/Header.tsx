"use client";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./Burger";
import { Button } from "@/app/components/ui/Button";
import t from "@/app/styles/modules/typography.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const LIGHT_LOGO = "/icons/logos/logo-light.svg";
  const DARK_LOGO = "/icons/logos/logo-dark.svg";

  return (
    <header className="fixed desk:top-40 top-20 left-0 right-0 z-40 desk:px-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="На главную" className="block">
            {mounted && (
              <>
                <Image
                  className="md:hidden desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={isOpen ? DARK_LOGO : LIGHT_LOGO}
                  alt="Логотип Амикан (мобильный)"
                  width={64}
                  height={64}
                  priority
                />
                <Image
                  className="hidden md:block desk:hidden desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={LIGHT_LOGO}
                  alt="Логотип Амикан (планшет)"
                  width={64}
                  height={64}
                />
                <Image
                  className="hidden desk:block desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                  src={isOpen ? DARK_LOGO : LIGHT_LOGO}
                  alt="Логотип Амикан (десктоп)"
                  width={64}
                  height={64}
                />
              </>
            )}
          </Link>
          <nav className="hidden desk:block px-35 py-20 bg-beige rounded-[6.25rem]">
            <ul className="flex text-18 gap-20 text-darkGreen">
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
          <div className="flex items-center gap-20">
            <Button href="/" className="hidden sm:block relative z-30">
              Оставить заявку
            </Button>
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
