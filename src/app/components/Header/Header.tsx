"use client";
import Link from "next/link";
import Image from "next/image";
import { BurgerMenu } from "./Burger";
import { Button } from "@/app/components/ui/Button";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/#about", label: "О туре" },
  { href: "/#features", label: "Преимущества" },
  { href: "/#program", label: "Программа" },
  { href: "/#gallery", label: "Галерея" },
  { href: "/#feedbacks", label: "Отзывы" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacts", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Следим за размерами хедера и кладём в :root --header-h
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--header-h",
        `${Math.ceil(h)}px`
      );
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    // На мобиле адресная строка/зум меняют высоту — подстрахуемся:
    window.addEventListener("orientationchange", setVar);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", setVar);
      window.removeEventListener("resize", setVar);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "fixed left-0 right-0 z-40 desk:px-20 transition-[background-color,box-shadow,backdrop-filter,padding,opacity]",
        "duration-300 ease-out will-change-[background-color,box-shadow,backdrop-filter,padding,opacity] rounded-b-3xl",
        {
          "py-10 md:py-20 bg-darkGreen/70 backdrop-blur-xl shadow-md":
            isScrolled,
          "py-10 md:py-20 desk:py-40 bg-transparent shadow-none": !isScrolled,
          "sm:bg-darkGreen/70 sm:backdrop-blur-xl sm:shadow-md": isScrolled,
          "sm:bg-transparent sm:shadow-none": !isScrolled,
          "opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto":
            isOpen,
          "opacity-100": !isOpen,
        }
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="На главную" className="block">
            <div
              className={clsx(
                "transition-opacity duration-300",
                isOpen ? "opacity-0 sm:opacity-100" : "opacity-100"
              )}
            >
              <Image
                className="desk:w-[4rem] w-[3.125rem] desk:h-[4rem] h-[3.125rem]"
                src="/icons/logos/logo-light.svg"
                alt="Логотип Амикан"
                width={64}
                height={64}
                priority
              />
            </div>
          </Link>
          <nav className="hidden desk:block px-35 py-20 bg-beige rounded-[6.25rem]">
            <ul className="flex text-18 gap-20 text-darkGreen">
              {nav.map((item) => (
                <li key={item.href} className="underline-animation">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-20">
            <div
              className={clsx(
                "flex justify-between items-center transition-opacity duration-300",
                isOpen && "opacity-0 pointer-events-none"
              )}
            >
              <Button href="/#contacts" className="hidden sm:block">
                Оставить заявку
              </Button>
            </div>
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
