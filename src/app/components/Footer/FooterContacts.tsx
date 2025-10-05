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
      className={`text-beige text-[0.75rem] md:text-[1rem] desk:[1.12rem] ${className}`}
    >
      <div className="flex gap-[1.2rem] mb-[0.62rem]">
        <PhoneIcon className="w-[1.43rem] h-[1.43rem] hidden md:block" />
        <Link
          className="text-[0.75rem] md:text-[1rem] desk:text-[1.12rem]"
          href="tel:+79080233438"
        >
          +7 (908) 023-34-38
        </Link>
      </div>
      <div className="flex gap-[1.2rem]">
        <EmailIcon className="w-[1.43rem] h-[1.43rem] hidden md:block" />
        <Link
          className="block text-[0.75rem] md:text-[1rem] desk:text-[1.12rem]"
          href="mailto:amikantravel@mail.ru"
        >
          amikantravel@mail.ru
        </Link>
      </div>
      <ul className="inline-grid grid-rows-2 grid-cols-2 gap-[0.62rem] md:flex md:gap-[1.25rem] md:py-[1.25rem] py-[0.93rem]">
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
