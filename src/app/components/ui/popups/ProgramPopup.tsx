"use client";

import { useState } from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/app/components/ui/Button";
import PopupClose from "./PopupClose";
import t from "@/app/styles/modules/typography.module.css";
import PopupBase from "./PopupBase";
import { sendContact } from "@/app/actions/sendContact";
import { PhoneField } from "@/app/components/ui/PhoneField";
import { useSuccessPopup } from "@/app/providers/SuccessPopupProvider";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProgramPopup({ open, onOpenChange }: Props) {
  const [pending, setPending] = useState(false);
  const { showSuccess } = useSuccessPopup();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.set("source", "Форма из Программа тура");

      const res = await sendContact(fd);
      if (res?.ok) {
        form.reset();
        onOpenChange(false);
        setTimeout(() => {
          showSuccess();
        }, 0);
      } else {
        alert(res?.error ?? "Заявка не отправилась. Повторите попытку.");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <PopupBase
      open={open}
      onOpenChange={onOpenChange}
      title="Получить программу тура"
      closeIt={<PopupClose />}
    >
      <form onSubmit={onSubmit} method="post">
        <input
          className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[0.75rem] md:text-[1rem] desk:text-[1.12rem] mb-[0.62rem] focus:border-sand transition-colors duration-200 focus:outline-none"
          type="text"
          name="Имя"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={40}
          pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
          title="2–40 символов, только буквы, пробелы, дефис и апостроф"
        />
        <PhoneField name="Телефон" />
        <input type="hidden" name="Источник" value="program" />
        <div className="flex gap-[0.62rem] items-center mb-[1.25rem]">
          <Checkbox
            className="h-[1rem] w-[1rem] border border-beige rounded-[0.2rem] dark:bg-transparent data-[state=checked]:bg-transparent dark:data-[state=checked]:bg-transparent data-[state=checked]:text-beige data-[state=checked]:border-beige"
        <div className="flex flex-col gap-10 md:gap-20">
          <input
            className="border border-beige rounded-50 w-full py-15 px-30 md:py-20 md:px-35 text-12 md:text-16 desk:text-18 focus:border-sand transition-colors duration-200 focus:outline-none leading-none"
            type="text"
            name="Имя"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={40}
            pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
            title="2–40 символов, только буквы, пробелы, дефис и апостроф"
          />
          <PhoneField name="Телефон" />
          <input type="hidden" name="Источник" value="program" />
          <div className="flex gap-10 items-center my-10 md:my-0">
            <Checkbox
              className="self-start desk:self-center h-[1rem] w-[1rem] border border-beige rounded-[0.2rem] dark:bg-transparent data-[state=checked]:bg-transparent dark:data-[state=checked]:bg-transparent data-[state=checked]:text-beige data-[state=checked]:border-beige"
              required
            />
            <p className={t["overline"]}>
              Я согласен с{" "}
              <Link className="underline" href="/privacy-policy">
                политикой конфиденциальности
              </Link>{" "}
              и{" "}
              <Link className="underline" href="/terms-user">
                пользовательским соглашением
              </Link>
            </p>
          </div>
          <Button type="submit" className="w-full !text-center">
            Отправить
          </Button>
        </div>
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "Отправляем..." : "Отправить"}
        </Button>
      </form>
    </PopupBase>
  );
}
