"use client";

import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import PopupClose from "./PopupClose";
import PopupBase from "./PopupBase";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { sendContact } from "@/app/actions/sendContact";
import { PhoneField } from "@/app/components/ui/PhoneField";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PopupPrice({ open, onOpenChange }: Props) {
  return (
    <PopupBase
      open={open}
      onOpenChange={onOpenChange}
      title="Уточнить стоимость тура"
      closeIt={<PopupClose />}
    >
      <form
        action={async (fd) => {
          fd.set("source", "Попап: Уточнить стоимость тура");
          const res = await sendContact(fd);
          if (res.ok) {
            onOpenChange(false);
          } else {
            alert(res.error ?? "Заявка не отправилась. Повторите попытку.");
          }
        }}
      >
        <input
          className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[1.12rem] mb-[0.62rem] focus:border-sand transition-colors duration-200 focus:outline-none"
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
        <div className="flex gap-[0.62rem] items-center mb-[1.25rem]">
          <Checkbox
            className="h-[1rem] w-[1rem] border border-beige rounded-[0.2rem] data-[state=checked]:bg-transparent data-[state=checked]:text-beige data-[state=checked]:border-beige"
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
        <Button type="submit" className="w-full">
          Отправить
        </Button>
      </form>
    </PopupBase>
  );
}
