"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import PopupClose from "./PopupClose";

type PopupSuccessProps = {
  open: boolean;
  closeIt?: ReactNode;
  onOpenChange: (v: boolean) => void;
};

export default function PopupSuccess({
  open,
  onOpenChange,
  closeIt = <PopupClose />,
}: PopupSuccessProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
          bg-darkGreen text-beige border-none !rounded-20 desk:!rounded-50
          p-20 md:p-30
          max-w-[calc(100vw-0.62rem*2)] md:max-w-[38.75rem] desk:max-w-[64.37rem]
          gap-10 md:gap-20 h-auto min-h-[21.75rem] md:min-h-[22.813rem] desk:min-h-[22.813rem] max-h-[min(90dvh,720px)] overflow-y-auto overscroll-contain
        "
      >
        <div className="absolute top-20 right-20">{closeIt}</div>
        <DialogHeader className="flex flex-col items-center justify-center gap-20">
          <DialogTitle className="text-24 md:text-30 desk:text-40 text-center uppercase font-bold leading-[1.23]">
            Спасибо, ваша заявка принята!
          </DialogTitle>
          <p className="text-center text-14 md:text-18 desk:text-24 font-normal">
            Наш менеджер свяжется с вами в течение 1 часа
          </p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
