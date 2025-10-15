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

  const CIS_COUNTRIES = ["ru", "kz", "by", "uz", "kg", "am", "az", "tj", "tm"];
  const countries = defaultCountries.filter((c) => {
    const { iso2 } = parseCountry(c);
    return CIS_COUNTRIES.includes(iso2);
  });

  const customFlags = [{ iso2: "ru", src: "/icons/ui/flags/ru-flag.svg" }];

 return (
    <div className={`relative mb-[1.25rem] ${containerClassName}`}>
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
          "w-full !h-full !mb-[0.62rem] !outline-none !transition-colors !duration-200",
          "!rounded-[3.12rem] !border !border-beige",
          "!bg-transparent !text-[0.75rem] md:!text-[1rem] desk:!text-[1.12rem] !text-beige placeholder-[#EFE5D9]/50",
          "!py-[0.93rem] md:!py-[1.25rem]",
          "!pr-[1.87rem] md:!pr-[2.18rem]",
          "!pl-[5rem] md:!pl-[5.3rem]",
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
