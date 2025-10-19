"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import t from "@/app/styles/modules/typography.module.css";

export default function ServicesAccordion() {
  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="what-to-bring" className="border-none">
          <AccordionTrigger className="group hover:no-underline focus:no-underline [&>svg]:hidden">
            <div className="group flex gap-25 md:gap-30 desk:gap-50 items-center pb-15 md:pb-20 cursor-pointer">
              <span className={`${t.display} uppercase font-bold text-beige`}>
                Что взять с собой
              </span>
              <span
                className="text-26 md:text-30 font-semibold text-white bg-sand rounded-full
                         w-[3.12rem] h-[3.12rem] desk:w-[4rem] desk:h-[4rem]
                         flex items-center justify-center transition-transform duration-400
                         transform-gpu will-change-transform
                         group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className="overflow-hidden data-[state=open]:smoothDown data-[state=closed]:smoothUp data-[state=open]:mt-0"
          >
            <div className="w-full border border-sand rounded-10 md:rounded-20 mb-20">
              <p className="text-beige text-12 md:text-16 desk:text-18 p-15 md:p-20 desk:p-30">
                Рюкзак, солнцезащитные очки, личная аптечка, средства личной
                гигиены, дождевик, лёгкий пуховик, головной убор, термобельё,
                флисовая одежда, футболки, рабочие и тёплые перчатки, носки,
                бафф, вейдерсы, сандалии для бани, нож, накомарник, репелленты
                (3 баллона на человека)
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
