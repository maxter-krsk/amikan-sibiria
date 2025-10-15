import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { PhoneIcon } from "@/app/components/ui/socials/PhoneIcon";
import { EmailIcon } from "@/app/components/ui/socials/EmailIcon";
import SocialsLinks from "./SocialsLinks";
import ContactsForm from "./ContactsForm";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="mb-100 scroll-mt-100 md:mb-120 md:scroll-mt-120 desk:mb-150 desk:scroll-mt-150"
    >
      <div className="container">
        <div className="flex flex-col items-end md:items-center md:flex-row gap-20 md:gap-40 mb-20 md:mb-40 desk:mb-50">
          <h1 className={`${t["heading"]} uppercase font-bold text-darkGreen`}>
            Контакты
          </h1>
          <p className="text-right md:text-left text-12 md:text-14 lg:text-18">
            Оставьте ваши контактные данные, наш менеджер
            <br />
            свяжется с вами и проконсультирует по всем вопросам
          </p>
        </div>
        <div className="flex flex-col-reverse gap-35 md:flex md:flex-row  desk:gap-200 md:items-end items-stretch">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5 md:gap-20">
              <Link
                className="group inline-flex gap-20 items-center text-16 lg:text-18"
                href="tel:+79080233438"
              >
                <span className="bg-sand rounded-full p-10 flex items-center justify-center group-hover:bg-lightGreen transition-colors duration-500">
                  <PhoneIcon className="w-[1.43rem] h-[1.43rem]" />
                </span>
                +7 (908) 023-34-38
              </Link>
              <Link
                className="inline-flex gap-20 items-center text-16 lg:text-18 group"
                href="mailto:amikantravel@mail.ru"
              >
                <span className="bg-sand duration-500 rounded-full p-10 flex items-center justify-center group-hover:bg-lightGreen transition-colors">
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
