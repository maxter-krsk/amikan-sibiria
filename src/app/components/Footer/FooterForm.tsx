"use client";

import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneField } from "@/app/components/ui/PhoneField";
import { sendContact } from "@/app/actions/sendContact";

type FooterFormProps = {
  className?: string;
};

export default function FooterForm({ className }: FooterFormProps) {
  return (
    <div className={`${className}`}>
      <p
        className={`${t["body-lg"]} text-beige hidden lg:block mb-20 font-medium`}
      >
        Оставьте свои данные, и мы свяжемся с вами
      </p>
      <form
        action={async (fd) => {
          fd.set("source", "Форма из подвала сайта");
          const res = await sendContact(fd);
          if (res.ok) {
            alert("Заявка отправлена");
          } else {
            alert(res.error ?? "Заявка не отправилась. Повторите попытку.");
          }
        }}
        className={`${t["body-lg"]} flex flex-col gap-10 text-beige `}
      >
        <input
          className="bg-transparent focus:border-sand focus:outline-none transition-colors duration-200 md:py-20 md:pl-35 border border-beige rounded-[3.12rem] py-15 pl-30 text-12 md:text-16 desk:text-18"
          type="text"
          name="Имя"
          placeholder="Ваше имя"
          required
          minLength={2}
          maxLength={40}
          pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
          title="2–40 символов, только буквы, пробелы, дефис и апостроф"
        />
        <PhoneField name="Телефон" />
        <div className="flex gap-10 items-center my-10">
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
        <Button
          type="submit"
          className="w-full flex items-center gap-20 md:gap-10 desk:gap-20 overflow-hidden text-beige"
        >
          Отправить
          <svg
            viewBox="0 0 218 8"
            preserveAspectRatio="none"
            className="flex-1 min-w-0 block"
            aria-hidden="true"
          >
            <path
              d="M217.354 4.35355C217.549 4.15829 217.549 3.84171 217.354 3.64645L214.172 0.464466C213.976 0.269204 213.66 0.269204 213.464 0.464466C213.269 0.659728 213.269 0.976311 213.464 1.17157L216.293 4L213.464 6.82843C213.269 7.02369 213.269 7.34027 213.464 7.53553C213.66 7.7308 213.976 7.7308 214.172 7.53553L217.354 4.35355ZM0 4V4.5H217V4V3.5H0V4Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </form>
    </div>
  );
}
