"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/app/components/ui/Button";
import SocialsLinks from "../sections/Contacts/SocialsLinks";

const nav = [
  { href: "/#about", label: "О туре" },
  { href: "/#features", label: "Преимущества" },
  { href: "/#program", label: "Программа" },
  { href: "/#gallery", label: "Галерея" },
  { href: "/#feedbacks", label: "Отзывы" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacts", label: "Контакты" },
];

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Открыть меню"
          className="inline-flex desk:hidden cursor-pointer h-50 w-50 flex-col items-center justify-center gap-[0.219rem] rounded-full bg-sand hover:bg-lightGreen transition-colors duration-500"
        >
          <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]" />
          <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]" />
          <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]" />
          <span className="w-[1.25rem] h-[0.1rem] bg-beige rounded-[0.125rem]" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="max-w-none w-full sm:w-screen bg-beige border-none px-10 py-10 md:py-20 gap-0 overflow-y-auto"
      >
        <SheetHeader className="p-0 pb-30 sm:hidden">
          <SheetClose asChild className="mr-auto justify-start">
            <Link href="/" className="w-fit inline-flex">
              <Image
                src="/icons/logos/logo-dark.svg"
                alt="Тёмный логотип Amikan"
                width={50}
                height={50}
              />
            </Link>
          </SheetClose>
        </SheetHeader>
        <nav>
          <ul className="flex flex-col items-start gap-20 text-16">
            {nav.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="underline-animation inline-flex"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetClose asChild>
          <Button
            href="/#contacts"
            className="!text-center mt-30 block sm:hidden"
          >
            Оставить заявку
          </Button>
        </SheetClose>
        <div className="flex justify-center sm:justify-start mt-30">
          <SocialsLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
