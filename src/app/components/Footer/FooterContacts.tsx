import Link from "next/link";
import { IconLink } from "@/app/components/ui/socials/IconLink";
import { PhoneIcon } from "../ui/socials/PhoneIcon";
import { EmailIcon } from "../ui/socials/EmailIcon";

type FooterContactsProps = {
  className?: string;
};

export default function FooterContacts({ className }: FooterContactsProps) {
  return (
    <div
      className={`text-beige text-12 md:text-16 desk:text-18 ${className}`}
    >
      <div className="flex gap-20 mb-10">
        <PhoneIcon className="w-[1.43rem] h-[1.43rem] hidden md:block" />
        <Link
          className="text-12 md:text-16 desk:text-18 underline-animation"
          href="tel:+79080233438"
        >
          +7 (908) 023-34-38
        </Link>
      </div>
      <div className="flex gap-20">
        <EmailIcon className="w-[1.43rem] h-[1.43rem] hidden md:block" />
        <Link
          className="block text-[0.75rem] md:text-[1rem] desk:text-[1.12rem] underline-animation"
          href="mailto:amikantravel@mail.ru"
        >
          amikantravel@mail.ru
        </Link>
      </div>
      <ul className="inline-grid grid-rows-2 grid-cols-2 gap-10 md:flex md:gap-20 md:py-20 py-15">
        <li>
          <IconLink
            href="#"
            label="Youtube"
            icon={
              <img
                src="/icons/ui/socials-icons/youtube.svg"
                alt="Youtube"
                className="w-[1.37rem] h-[0.93rem]"
              />
            }
          ></IconLink>
        </li>
        <li>
          <IconLink
            href="#"
            label="Telegram"
            icon={
              <img
                src="/icons/ui/socials-icons/telegram.svg"
                alt="Telegram"
                className="w-[1.43rem] h-[1.43rem]"
              />
            }
          ></IconLink>
        </li>
        <li>
          <IconLink
            href="#"
            label="VK"
            icon={
              <img
                src="/icons/ui/socials-icons/vk.svg"
                alt="VK"
                className="w-[1.43rem] h-[1.43rem]"
              />
            }
          ></IconLink>
        </li>
        <li>
          <IconLink
            href="#"
            label="WhatsApp"
            icon={
              <img
                src="/icons/ui/socials-icons/wa.svg"
                alt="WhatsApp"
                className="w-[1.43rem] h-[1.43rem]"
              />
            }
          ></IconLink>
        </li>
      </ul>
    </div>
  );
}
