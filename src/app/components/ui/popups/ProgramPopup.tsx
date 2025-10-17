"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/app/components/ui/Button";
import PopupClose from "./PopupClose";
import t from "@/app/styles/modules/typography.module.css";
import Link from "next/link";
import PopupBase from "./PopupBase";
import { sendContact } from "@/app/actions/sendContact";
import { PhoneField } from "@/app/components/ui/PhoneField";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProgramPopup({ open, onOpenChange }: Props) {
  return (
    <PopupBase
      open={open}
      onOpenChange={onOpenChange}
      title="Получить программу тура"
      closeIt={<PopupClose />}
    >
      <form
        action={async (fd) => {
          fd.set("source", "Попап: Получить программу");
          const res = await sendContact(fd);
          if (res.ok) {
            onOpenChange(false);
          } else {
            alert(res.error ?? "Заявка не отправилась. Повторите попытку.");
          }
        }}
      >
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
      </form>
    </PopupBase>
  );
}
