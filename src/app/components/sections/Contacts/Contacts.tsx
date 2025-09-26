import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { PhoneIcon } from "@/app/components/ui/socials/PhoneIcon";
import { EmailIcon } from "@/app/components/ui/socials/EmailIcon";
import SocialsLinks from "./SocialsLinks";
import ContactsForm from "./ContactsForm";

export default function Contacts() {
  return (
    <section className="my-[6.52rem] md:my-[7.5rem] desk:my-[9.37rem]">
      <div className="container">
        <div className="flex flex-col items-end md:items-center md:flex-row md:gap-[2.5rem] mb-[3.12rem]">
          <h1 className={`${t["heading"]} uppercase font-bold text-darkGreen`}>
            Контакты
          </h1>
          <caption className="text-right md:text-left text-[0.75rem] md:text-[0.87rem] desk:text-[1.12rem]">
            Оставьте ваши контактные данные, наш менеджер
            <br />
            свяжется с вами и проконсультирует по всем вопросам
          </caption>
        </div>
        <div className="flex flex-col-reverse gap-[2.18rem] md:flex md:flex-row md:gap-[12.5rem] md:items-end items-stretch">
          <div className="flex flex-col gap-[1.25rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <Link
                className="inline-flex gap-[1.25rem] items-center text-[1rem] desk:text-[1.12rem]"
                href="tel:+79080233438"
              >
                <span className="bg-sand rounded-full p-[0.62rem] flex items-center justify-center">
                  <PhoneIcon className="w-[1.43rem] h-[1.43rem]" />
                </span>
                +7 (908) 023-34-38
              </Link>
              <Link
                className="inline-flex gap-[1.25rem] items-center text-[1rem] desk:text-[1.12rem]"
                href="mailto:amikantravel@mail.ru"
              >
                <span className="bg-sand rounded-full p-[0.62rem] flex items-center justify-center">
                  <EmailIcon className="w-[1.43rem] h-[1.43rem]" />
                </span>
                amikantravel@mail.ru
              </Link>
            </div>
            <SocialsLinks />
          </div>
          <div className="flex-1 min-w-0">
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
