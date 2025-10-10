import { IconLink } from "@/app/components/ui/socials/IconLink";

export default function SocialsLinks() {
  return (
    <ul className="flex gap-20">
      <li>
        <IconLink
          href="#"
          label="Youtube"
          icon={
            <img
              src="/icons/ui/socials-icons/youtube.svg"
              alt="Youtube"
              className="w-[1.43rem] h-[1.43rem]"
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
  );
}
