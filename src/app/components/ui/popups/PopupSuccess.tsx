"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PopupSuccessProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export default function PopupSuccess({ open, onOpenChange }: PopupSuccessProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          bg-darkGreen text-beige border-none !rounded-20 desk:!rounded-50
          p-20 md:p-30
          max-w-[calc(100vw-0.62rem*2)] md:max-w-[38.75rem] desk:max-w-[64.37rem]
          gap-20 md:gap-30 desk:gap-40
        "
      >
        <DialogHeader>
          <div className="flex flex-col-reverse md:flex md:flex-row justify-between">
            <DialogTitle className="text-24 md:text-30 desk:text-40 pr-20 uppercase font-bold text-left">
              Спасибо за заявку!
            </DialogTitle>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
