import Link from "next/link";
import PhoneIcon from "../ui/socials/PhoneIcon";
import t from "@/app/styles/modules/typography.module.css";

export default function FooterContacts() {
  return (
    <div>
      <div className="flex gap-[1.2rem]">
        <PhoneIcon />
        <Link href="tel:+79080233438">+7 (908) 023-34-38</Link>
      </div>
      <div className="flex gap-[1.2rem]">
        <PhoneIcon />
        <Link className="block" href="mailto:amikantravel@mail.ru">
          amikantravel@mail.ru
        </Link>
      </div>
    </div>
  );
}
