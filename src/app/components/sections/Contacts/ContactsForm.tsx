"use client";

import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneField } from "@/app/components/ui/PhoneField";
import { sendContact } from "@/app/actions/sendContact";

export default function ContactsForm() {
  return (
    <form
      action={async (fd) => {
        fd.set("source", "Форма из блока Контакты");
        const res = await sendContact(fd);
        if (res.ok) {
          alert("Заявка отправлена");
        } else {
          alert(res.error ?? "Заявка не отправилась. Повторите попытку.");
        }
      }}
      className={`${t["body-lg"]} flex flex-col gap-10 text-darkGreen w-full`}
    >
      <input
        className="bg-transparent text-12 md:text-16 lg:text-18 md:py-20 md:pl-35 border border-darkGreen focus:border-sand transition-colors duration-200 focus:outline-none rounded-[3.12rem] py-15 pl-30"
        type="text"
        name="Имя"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
        pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
        title="2–40 символов, только буквы, пробелы, дефис и апостроф"
      />
      <PhoneField
        inputClassName="!border-darkGreen !text-darkGreen"
        containerClassName="!mb-0"
        name="Телефон"
      />
      <div className="flex flex-col gap-10 md:gap-20 desk:flex-row justify-between">
        <div className="flex gap-10 items-top w-full">
          <Checkbox
            className="h-[1rem] w-[1rem] border border-darkGreen rounded-[0.2rem] data-[state=checked]:bg-transparent dark:data-[state=checked]:bg-transparent
          data-[state=checked]:text-darkGreen data-[state=checked]:border-darkGreen color-scheme-light"
            required
          />
          <p className={`${t["overline"]} w-full`}>
            Я подтверждаю, что ознакомился и согласен с условиями обработки моих
            персональных данных, а также с{" "}
            <Link className="underline" href="/privacy-policy">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
        <Button
          className="flex justify-start items-center gap-20 md:gap-10 lg:gap-20 w-full"
          type="submit"
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
      </div>
    </form>
  );
}
