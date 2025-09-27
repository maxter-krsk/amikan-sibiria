"use client";

import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";

export default function FooterForm() {
  return (
    <div>
      <p
        className={`${t["body-lg"]} text-beige hidden md:block mb-[1.25rem] font-medium`}
      >
        Оставьте свои данные, и мы свяжемся с вами
      </p>
      <form className={`${t["body-lg"]} flex flex-col gap-4 text-beige`}>
        <input
          className="bg-transparent focus:border-sand focus:outline-none md:py-[1.25rem] md:pl-[2.18rem] border border-beige rounded-[3.12rem] py-[0.93rem] pl-[1.87rem]"
          type="text"
          name="Имя"
          placeholder="Ваше имя"
          required
          minLength={2}
        />
        <input
          className="bg-transparent focus:border-sand focus:outline-none md:py-[1.25rem] md:pl-[2.18rem] border border-beige rounded-[3.12rem] py-[0.93rem] pl-[1.87rem]"
          type="tel"
          name="Телефон"
          placeholder="+7 (XXX) XXX-XX-XX"
          required
          minLength={11}
          maxLength={11}
        />
        <div className="flex gap-[0.62rem] items-center">
          <Checkbox
            className="h-[1rem] w-[1rem] border border-beige rounded-[0.2rem] data-[state=checked]:bg-transparent
    data-[state=checked]:text-beige data-[state=checked]:border-beige"
            required
          />
          <p className={`${t["overline"]}`}>
            Я согласен с{" "}
            <Link className="underline" href="/privacy-policy">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
}
