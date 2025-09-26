import t from "@/app/styles/modules/typography.module.css";
import FaqList from "./FaqList";

export default function Faq() {
  return (
    <section>
      <div className="container">
        <h1
          className={`${t.heading} font-bold text-darkGreen flex justify-end md:justify-start mb-[1.8rem] md:mb-[3.12rem]`}
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
      </div>
    </section>
  );
}
