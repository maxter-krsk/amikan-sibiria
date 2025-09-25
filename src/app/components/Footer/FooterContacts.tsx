import Link from "next/link";
import { PhoneIcon } from "../ui/socials/PhoneIcon";
import { EmailIcon } from "../ui/socials/EmailIcon";
import t from "@/app/styles/modules/typography.module.css";
import { IconLink } from "@/app/components/ui/socials/IconLink";

export default function FooterContacts() {
  return (
    <div className="text-beige text-[0.75] md:text-[1rem] desk:[1.12rem]">
      <div className="flex gap-[1.2rem] mb-[0.62rem]">
        <PhoneIcon />
        <Link href="tel:+79080233438">+7 (908) 023-34-38</Link>
      </div>
      <div className="flex gap-[1.2rem]">
        <EmailIcon />
        <Link className="block" href="mailto:amikantravel@mail.ru">
          amikantravel@mail.ru
        </Link>
      </div>
      <ul className="grid grid-cols-2 md:flex gap-[1.25rem] md:py-[1.25rem] py-[0.93rem]">
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
