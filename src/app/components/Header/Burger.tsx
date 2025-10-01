import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconLink } from "@/app/components/ui/socials/IconLink";
import t from "@/app/styles/modules/typography.module.css";
import { Icon } from "lucide-react";

type burgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function BurgerMenu({ isOpen, toggleMenu }: burgerMenuProps) {
  return (
    <div className="desk:hidden">
      <button onClick={toggleMenu}>
        <div className="relative z-30 w-[4rem] h-[4rem] bg-sand rounded-full flex flex-col justify-center items-center gap-[0.35rem]">
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
          <span className="w-[2rem] h-[0.1rem] bg-beige rounded-[0.125rem]"></span>
        </div>
      </button>
      {isOpen && (
        <div className="fixed inset-0">
          <div
            onClick={toggleMenu}
            className="z-10 w-full h-full fixed bg-black/50"
          ></div>
          <div className="flex flex-col bg-beige fixed z-10 top-0 right-0 w-full h-full p-[1.25rem] md:w-[50%]">
            <div className="sm:mb-[1.87rem] md:mb-0">
              <Link href="/">
                <Image
                  className="md:hidden"
                  src="/icons/logos/logo-dark.svg"
                  alt="Логотип Амикан"
                  width={64}
                  height={64}
                />
              </Link>
            </div>
            <nav>
              <ul
                className={`${t["body-lg"]} flex flex-col gap-[0.625rem] text-darkGreen`}
              >
                <li>
                  <Link onClick={toggleMenu} href="/">
                    О туре
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    Программа
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    Галерея
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link onClick={toggleMenu} href="/">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              onClick={toggleMenu}
              href="/"
              className={`${t.subtitle} mt-[1.875rem] text-center uppercase font-semibold text-beige px-[1.9rem] py-[1.3rem] bg-sand rounded-[6.2rem]`}
            >
              Оставить заявку
            </Link>
            <div className="flex justify-center gap-[1.25rem] mt-[2.5rem]">
              <IconLink
                href={"/"}
                label={"YouTube"}
                icon={
                  <Image
                    src="/icons/ui/socials-icons/youtube.svg"
                    alt="YouTube"
                    width={23}
                    height={23}
                  />
                }
              />
              <IconLink
                href={"/"}
                label={"Телеграм"}
                icon={
                  <Image
                    src="/icons/ui/socials-icons/telegram.svg"
                    alt="Телеграм"
                    width={23}
                    height={23}
                  />
                }
              />
              <IconLink
                href={"/"}
                label={"Вконтакте"}
                icon={
                  <Image
                    src="/icons/ui/socials-icons/vk.svg"
                    alt="Вконтакте"
                    width={23}
                    height={23}
                  />
                }
              />
              <IconLink
                href={"/"}
                label={"WhatsApp"}
                icon={
                  <Image
                    src="/icons/ui/socials-icons/wa.svg"
                    alt="WhatsApp"
                    width={23}
                    height={23}
                  />
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
