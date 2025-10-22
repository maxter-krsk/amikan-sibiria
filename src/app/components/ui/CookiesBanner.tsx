"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONSENT_COOKIE = "cookie-consent=true";
const COOKIE_MAX_AGE_DAYS = 6;

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes("cookie-consent=");
    if (!hasConsent) setVisible(true);
  }, []);

  const accept = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_MAX_AGE_DAYS);
    document.cookie = `${CONSENT_COOKIE}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookies"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 17,
            duration: 0.5,
          }}
          className="fixed bottom-0 left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 md:bottom-6 md:max-w-2xl md:w-[calc(100%-2rem)] md:mx-auto p-0 md:p-2
  "
        >
          <div className="bg-darkGreen rounded-t-2xl md:rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <div className="p-20 flex flex-col gap-20">
              <p className="text-14 leading-relaxed text-beige text-center">
                Продолжая просмотр сайта, вы соглашаетесь с использованием
                cookie в соответствии с нашей{" "}
                <Link
                  href="/cookie-policy"
                  className="text-beige underline-animation underline font-medium"
                >
                  Политикой в отношении обработки cookie-файлов
                </Link>
              </p>
              <div className="flex justify-center">
                <button
                  onClick={accept}
                  className="px-50 py-15 cursor-pointer rounded-30 bg-sand hover:bg-lightGreen text-[#efe5d9] text-14 font-medium transition-colors duration-500 hover:shadow-lg"
                >
                  Ок, понятно
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
