"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import PopupSuccess from "@/app/components/ui/popups/PopupSuccess";

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
      <PopupSuccess open={isOpen} onOpenChange={setIsOpen} />
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
