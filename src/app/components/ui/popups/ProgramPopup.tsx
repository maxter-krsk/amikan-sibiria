"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/app/components/ui/Button";
import t from "@/app/styles/modules/typography.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

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
        className="bg-darkGreen text-beige border-none rounded-[3.12rem] p-[1.87rem] sm:max-w-[64.37rem] w-full"
      >
        <DialogHeader>
          <div className="flex justify-between">
            <DialogTitle className="text-[2.5rem] pr-[1.25rem] uppercase font-bold text-left">
              Получить программу тура
            </DialogTitle>
            <AnimatePresence>
              <DialogClose asChild>
                <motion.button
                  className="pointer-events-auto flex-shrink-0 cursor-pointer bg-sand rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center shadow-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 50 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                  }}
                >
                  <img src="/icons/ui/close-icon.svg" alt="Закрыть" />
                </motion.button>
              </DialogClose>
            </AnimatePresence>
          </div>
        </DialogHeader>
        <form>
          <input
            className="border border-beige rounded-[3.12rem] w-full py-[1.25rem] px-[2.18rem] text-[1.12rem] mb-[0.62rem]
			focus:border-sand focus:outline-none"
            type="text"
            name="Имя"
            placeholder="Ваше имя"
            required
            minLength={2}
          />
          <input
            className="border border-beige rounded-[3.12rem] w-full py-[1.25rem] px-[2.18rem] text-[1.12rem] mb-[1.25rem]
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
