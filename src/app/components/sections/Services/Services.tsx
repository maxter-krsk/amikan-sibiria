import t from "@/app/styles/modules/typography.module.css";
import ServicesCard from "./ServicesCard";
import { Button } from "@/app/components/ui/Button";

export default function Services() {
  return (
    <section className="bg-darkGreen h-screen rounded-[3.12rem] mx-[1.25rem]">
      <div className="container">
        <h1
          className={`${t.heading} uppercase font-bold text-beige py-[3.12rem]`}
        >
          Что включено
        </h1>
        <ServicesCard />
        <div className="mt-[3.12rem] flex flex-col items-end gap-[1.25rem]">
          <p className={`${t.subtitle} text-beige font-medium text-left`}>
            Возможны дополнительные услуги
          </p>
          <Button>
            Уточнить стоимость тура<span> →</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
