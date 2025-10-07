"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/app/components/ui/Button";
import PopupClose from "./PopupClose";
import t from "@/app/styles/modules/typography.module.css";
import Link from "next/link";
import PopupBase from "./PopupBase";

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
      <form>
        <input
          className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[1.12rem] mb-[0.62rem] focus:border-sand focus:outline-none"
          type="text"
          name="Имя"
          placeholder="Ваше имя"
          required
          minLength={2}
        />
        <input
          className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[1.12rem] mb-[1.25rem] focus:border-sand focus:outline-none"
          type="tel"
          name="Телефон"
          placeholder="+7 (XXX) XXX-XX-XX"
          required
          minLength={11}
          maxLength={11}
        />
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
