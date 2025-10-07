"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/app/components/ui/Button";
import PopupClose from "./PopupClose";
import t from "@/app/styles/modules/typography.module.css";
import Link from "next/link";

type ProgramPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProgramPopup({
  open,
  onOpenChange,
}: ProgramPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
    bg-darkGreen text-beige border-none rounded-[1.25rem] desk:rounded-[3.12rem] p-[0.62rem] md:p-[1.87rem] max-w-[calc(100vw-0.62rem*2)] md:max-w-[38.75rem] desk:max-w-[64.37rem] gap-[1.25rem] md:gap-[1.87rem] desk:gap-[2.5rem]
  "
      >
        <DialogHeader>
          <div className="flex flex-col-reverse md:flex md:flex-row justify-between">
            <DialogTitle className="text-[1.5rem] md:text-[1.87rem] desk:text-[2.5rem] pr-[1.25rem] uppercase font-bold text-left">
              Получить программу тура
            </DialogTitle>
            <PopupClose />
          </div>
        </DialogHeader>
        <form>
          <input
            className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[1.12rem] mb-[0.62rem]
			focus:border-sand focus:outline-none"
            type="text"
            name="Имя"
            placeholder="Ваше имя"
            required
            minLength={2}
          />
          <input
            className="border border-beige rounded-[3.12rem] w-full py-[0.93rem] px-[1.87rem] md:py-[1.25rem] md:px-[2.18rem] text-[1.12rem] mb-[1.25rem]
			focus:border-sand focus:outline-none"
            type="tel"
            name="Телефон"
            placeholder="+7 (XXX) XXX-XX-XX"
            required
            minLength={11}
            maxLength={11}
          />
          <div className="flex gap-[0.62rem] items-center mb-[1.25rem]">
            <Checkbox
              className="h-[1rem] w-[1rem] border border-beige rounded-[0.2rem] data-[state=checked]:bg-transparent
    data-[state=checked]:text-beige data-[state=checked]:border-beige"
              required
            />
            <p className={`${t["overline"]}`}>
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
      </DialogContent>
    </Dialog>
  );
}
