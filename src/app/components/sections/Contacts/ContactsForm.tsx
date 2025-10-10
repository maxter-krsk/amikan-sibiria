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
      className={`${t["body-lg"]} flex flex-col gap-4 text-darkGreen w-full`}
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
        name="Телефон"
      />
      <div className="flex gap-10 items-center">
        <Checkbox
          className="h-[1rem] w-[1rem] border border-darkGreen rounded-[0.2rem] data-[state=checked]:bg-transparent
          data-[state=checked]:text-darkGreen data-[state=checked]:border-darkGreen"
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
  );
}
