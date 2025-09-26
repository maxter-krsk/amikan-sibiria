import { IconLink } from "@/app/components/ui/socials/IconLink";

export default function SocialsLinks() {
  return (
    <ul className="flex gap-[1.25rem]">
      <li>
        <IconLink
          href="#"
          label="Youtube"
          icon={<img src="/icons/ui/socials-icons/youtube.svg" alt="Youtube" />}
        ></IconLink>
      </li>
      <li>
        <IconLink
          href="#"
          label="Telegram"
          icon={
            <img src="/icons/ui/socials-icons/telegram.svg" alt="Telegram" />
          }
        ></IconLink>
      </li>
      <li>
        <IconLink
          href="#"
          label="VK"
          icon={<img src="/icons/ui/socials-icons/vk.svg" alt="VK" />}
        ></IconLink>
      </li>
      <li>
        <IconLink
          href="#"
          label="WhatsApp"
          icon={<img src="/icons/ui/socials-icons/wa.svg" alt="WhatsApp" />}
        ></IconLink>
      </li>
    </ul>
  );
}
