"use client";

import { useState } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

type PhoneFieldProps = {
  name?: string;
  inputClassName?: string;
  containerClassName?: string;
};

export function PhoneField({ name = "Телефон", inputClassName = "", containerClassName = "",}: PhoneFieldProps) {
  const [value, setValue] = useState("");

  const CIS_COUNTRIES = ["ru", "kz", "by", "uz", "kg", "am", "az", "tj", "tm", "cn", "mn"];
  const countries = defaultCountries.filter((c) => {
    const { iso2 } = parseCountry(c);
    return CIS_COUNTRIES.includes(iso2);
  });

  const customFlags = [{ iso2: "ru", src: "/icons/ui/flags/ru-flag.svg" }];

 return (
    <div className={`relative ${containerClassName}`}>
      <PhoneInput
        value={value}
        onChange={setValue}
        defaultCountry="ru"
        countries={countries}
        flags={customFlags}
        placeholder="+7 (XXX) XXX-XX-XX"
        className="phone-field-container relative w-full"
        inputClassName={[
          "phone-field-input",
          "w-full !h-full !outline-none !transition-colors !duration-200",
          "!rounded-50 !border !border-beige",
          "!bg-transparent !text-12 md:!text-16 desk:!text-18 !text-beige placeholder-[#EFE5D9]/50",
          "!py-15 md:!py-20",
          "!pr-30 md:!pr-35",
          "!pl-80 md:!pl-[5.3rem]",
          "focus:!border-sand",
          inputClassName,
        ].join(" ")}
        countrySelectorStyleProps={{
          buttonClassName: "phone-flag-button border-0 shadow-none",
          flagClassName: "rounded-full",
        }}
        dialCodePreviewStyleProps={{ className: "hidden" }}
      />
      <input type="hidden" name={name} value={value} required />
    </div>
  );
}
