"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type PopupBaseProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  closeIt?: ReactNode;
  children: ReactNode;
};

export default function PopupBase({
  open,
  onOpenChange,
  title,
  closeIt,
  children,
}: PopupBaseProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="
          bg-darkGreen text-beige border-none rounded-[1.25rem] desk:rounded-[3.12rem]
          p-[0.62rem] md:p-[1.87rem]
          max-w-[calc(100vw-0.62rem*2)] md:max-w-[38.75rem] desk:max-w-[64.37rem]
          gap-[1.25rem] md:gap-[1.87rem] desk:gap-[2.5rem]
        "
      >
        <DialogHeader>
          <div className="flex flex-col-reverse md:flex md:flex-row justify-between">
            <DialogTitle className="text-[1.5rem] md:text-[1.87rem] desk:text-[2.5rem] pr-[1.25rem] uppercase font-bold text-left">
              {title}
            </DialogTitle>
            {closeIt}
          </div>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
