import { IconLink } from "@/app/components/ui/socials/IconLink";

export default function SocialsLinks() {
  return (
    <ul className="flex gap-20">
      <li>
        <IconLink
          href="https://www.youtube.com/channel/UCTROFo9BTCoMUu8e8XCBWkA"
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
          href="https://t.me/AmikanSiberia"
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
          href="https://vk.com/amikan.travel"
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
          href="https://wa.me/79080233438"
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
