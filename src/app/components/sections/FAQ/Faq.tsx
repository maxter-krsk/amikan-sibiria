import t from "@/app/styles/modules/typography.module.css";
import FaqList from "./FaqList";

export default function Faq() {
  return (
    <section className="mb-100 md:mb-120 desk:mb-150">
      <div className="container">
        <h1
          className={`${t.heading} font-bold text-darkGreen flex justify-end md:justify-start mb-30 md:mb-50`}
        >
          FAQ
        </h1>
        <FaqList
          name=" Когда лучше отправляться?"
          descr="Тур проводится с конца мая по сентябрь (конкретные даты уточняет менеджер)"
        />
        <FaqList
          name="Нужен ли опыт рыбалки?"
          descr="Нет, рыбалка проходит под руководством профессиональных гидов, тур подходит новичкам"
        />
        <FaqList
          name="Какая физическая подготовка требуется?"
          descr="Поездка не требует подготовки и подходит как для семей, так и для дружеских компаний"
        />
        <FaqList
          name="Что входит в стоимость?"
          descr="Проживание, питание, трансфер, аренда оборудования, услуги гидов"
        />
        <FaqList
          name="Как забронировать?"
          descr="Оставьте заявку, менеджер свяжется в течение 24 часов и подготовит договор"
        />
        <FaqList
          name="Можно ли взять детей?"
          descr="Да, туры подходят для семейных поездок, безопасность и комфорт гарантированы"
        />
      </div>
    </section>
  );
}
