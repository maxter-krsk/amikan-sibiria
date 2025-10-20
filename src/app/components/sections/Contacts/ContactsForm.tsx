"use client";

import { useState } from "react";
import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneField } from "@/app/components/ui/PhoneField";
import { sendContact } from "@/app/actions/sendContact";
import { useSuccessPopup } from "@/app/providers/SuccessPopupProvider";

export default function ContactsForm() {
  const [pending, setPending] = useState(false);
  const { showSuccess } = useSuccessPopup();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.set("source", "Форма из блока Контакты");

      const res = await sendContact(fd);
      if (res?.ok) {
        form.reset();
        showSuccess();
      } else {
        alert(res?.error ?? "Заявка не отправилась. Повторите попытку.");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      className={`${t["body-lg"]} flex flex-col gap-20 text-darkGreen w-full`}
    >
      <input
        className="bg-transparent text-12 md:text-16 lg:text-18 md:py-20 md:px-35 border border-darkGreen focus:border-sand transition-colors duration-200 focus:outline-none rounded-[3.12rem] py-15 px-30 leading-none"
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
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 desk:flex-row justify-between">
        <div className="flex gap-10 self-center">
          <Checkbox
            className="h-[1rem] w-[1rem] border border-darkGreen rounded-[0.2rem] data-[state=checked]:bg-transparent dark:bg-transparent dark:data-[state=checked]:bg-transparent
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
        <Button type="submit" disabled={pending} className="!text-center">
          {pending ? "Отправляем..." : "Отправить"}
        </Button>
      </div>
    </form>
  );
}
