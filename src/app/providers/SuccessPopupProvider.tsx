"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import PopupSuccess from "@/app/components/ui/popups/PopupSuccess";
import { createPortal } from "react-dom";

type PortalPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function PortalPopup({ open, onOpenChange }: PortalPopupProps) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <PopupSuccess open={open} onOpenChange={onOpenChange} />,
    document.body
  );
}

type Ctx = {
  showSuccess: () => void;
};

const SuccessPopupCtx = createContext<Ctx | null>(null);

export function SuccessPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<Ctx>(
    () => ({
      showSuccess: () => setIsOpen(true),
    }),
    []
  );

  return (
    <SuccessPopupCtx.Provider value={value}>
      {children}
      <PortalPopup open={isOpen} onOpenChange={setIsOpen} />
    </SuccessPopupCtx.Provider>
  );
}

export function useSuccessPopup() {
  const ctx = useContext(SuccessPopupCtx);
  if (!ctx) {
    throw new Error(
      "useSuccessPopup обязательно должен использоваться внутри SuccessPopupProvider"
    );
  }
  return ctx;
}
