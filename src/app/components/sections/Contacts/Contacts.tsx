import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { IconLink } from "@/app/components/ui/socials/IconLink";
import { PhoneIcon } from "@/app/components/ui/socials/PhoneIcon";
import { EmailIcon } from "@/app/components/ui/socials/EmailIcon";
import ContactsForm from "./ContactsForm";

export default function Contacts() {
  return (
    <section className="my-[6.52rem] md:my-[7.5rem] desk:my-[9.37rem]">
      <div className="container">
        <div className="flex flex-col items-end md:items-center md:flex-row md:gap-[2.5rem] mb-[3.12rem]">
          <h1 className={`${t["heading"]} uppercase font-bold`}>Контакты</h1>
          <caption className="text-right md:text-left">
            Оставьте ваши контактные данные, наш менеджер
            <br />
            свяжется с вами и проконсультирует по всем вопросам
          </caption>
        </div>
        <div className="flex gap-[12.5rem]">
          <div className="flex flex-col gap-[3.5rem]">
            <div className="bg-red-500 flex flex-col gap-[1.25rem]">
              <Link className="bg-red-500 inline-flex" href="tel:+79080233438">
                <PhoneIcon />
                +7 (908) 023-34-38
              </Link>
              <Link className="bg-red-500 inline-flex" href="tel:+79080233438">
                <EmailIcon />
                +7 (908) 023-34-38
              </Link>
            </div>
            <ul className="flex gap-[1.25rem]">
              <li>
                <IconLink
                  href="#"
                  label="Youtube"
                  icon={
                    <img
                      src="/icons/ui/socials-icons/youtube.svg"
                      alt="Youtube"
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
                    />
                  }
                ></IconLink>
              </li>
              <li>
                <IconLink
                  href="#"
                  label="Youtube"
                  icon={
                    <img
                      src="/icons/ui/socials-icons/youtube.svg"
                      alt="Youtube"
                    />
                  }
                ></IconLink>
              </li>
              <li>
                <IconLink
                  href="#"
                  label="Youtube"
                  icon={
                    <img
                      src="/icons/ui/socials-icons/youtube.svg"
                      alt="Youtube"
                    />
                  }
                ></IconLink>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-0">
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
