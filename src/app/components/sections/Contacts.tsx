import t from "@/app/styles/modules/typography.module.css";
import { IconLink } from "@/app/components/ui/socials/IconLink";

export default function Contacts() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center mb-[3.12rem]">
          <h1 className={`${t["heading"]} uppercase font-bold`}>Контакты</h1>
          <caption className="">
            Оставьте ваши контактные данные, наш менеджер&nbsp;свяжется с вами и
            проконсультирует по всем вопросам
          </caption>
        </div>
        <div>
          <IconLink
            href="tel:+79080233438"
            label="Телефон"
            icon={
              <img
                src="/icons/ui/socials-icons/phone.svg"
                alt="Телефон"
                className="w-[1.37rem] h-[0.93rem]"
              />
            }
          ></IconLink>
        </div>
      </div>
    </section>
  );
}
