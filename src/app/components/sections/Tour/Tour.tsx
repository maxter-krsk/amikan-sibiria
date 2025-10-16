"use client";

import t from "@/app/styles/modules/typography.module.css";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Dir = "right" | "left";

const variants = {
  hidden: (dir: Dir) => ({ opacity: 0, x: dir === "right" ? 50 : -50 }),
  visible: { opacity: 1, x: 0 },
};

export default function Tour() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      setIsMobile(mq.matches);
      setMounted(true);
    };
    apply();
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } else {
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);
  const tour = [
    {
      dayNumber: "1",
      dayLabel: "день",
      title: "Прибытие в Абакан",
      activities: [
        "После приезда в Абакан вас встретят, отвезут на завтрак и пригласят на экскурсию в историко‑этнографический комплекс «Шушенское»",
        "Вы посетите дом‑музей им. В.И. Ленина, насладитесь обедом и отправитесь к Саяно‑Шушенской ГЭС, где расположился наш плавкомплекс",
        "Вечером — размещение, ужин и отдых на воде",
      ],
    },
    {
      dayNumber: "2",
      dayLabel: "день",
      title: "Рыбалка на водохранилище",
      activities: [
        "На второй день после завтрака вас ожидает рыбалка в акватории Саяно‑Шушенского биосферного заповедника",
        "Вы проведёте время на катере, попробуете ловлю в разных местах, отдохнёте, пообедав на природе, и к вечеру вернётесь на базу",
        "Вечером — баня, ужинин и общение в дружеской атмосфере",
      ],
    },
    {
      dayNumber: "3",
      dayLabel: "день",
      title: "Переход на реку Кантегир",
      activities: [
        "Следующим утром стартует переход на аэролодках: примерно 60 км по водохранилищу и ещё 50 км вверх по горной реке Кантегир",
        "По пути вы будете рыбачить на хариуса, пообедаете на берегу и к вечеру заселитесь в уютную таёжную базу Ярыгина",
        "Здесь — ужин из свежего улова и заслуженный отдых",
      ],
    },
    {
      dayNumber: "4",
      dayLabel: "день",
      title: "Сплав и возвращение",
      activities: [
        "Четвёртый день начинается с завтрака и неспешного возвращения по течению обратно к плавкомплексу",
        "Вы вновь останавливаетесь на рыбных местах, обедаете на природе и ближе к вечеру оказываетесь на базе, где вас ждут ужин, банные процедуры и расслабленный вечер",
      ],
    },
    {
      dayNumber: "5",
      dayLabel: "день",
      title: "Экскурсии и завершение тура",
      activities: [
        "Заключительный день тура начинается с выезда с плавкомплекса",
        "В программе — джип‑тур на смотровую площадку СШГЭС и подъём на вершину Гладенькой",
        "На обед вы попробуете местную форель, а после отправитесь в Абакан",
        "Далее — заселение в гостиницу для завершения отдыха или вылет в пункт назначения, если вы планируете сразу возвращаться домой",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="program"
      className="relative overflow-x-hidden pb-100 md:pb-120 desk:pb-150 bg-no-repeat bg-cover [background-position:-270px_70px] md:bg-[url('/icons/ui/background-line.svg')] bg-none"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-y-0 left-12 md:left-1/2 md:-translate-x-1/2 w-[3rem] md:w-[8.37rem] desk:w-[16.18rem] bg-darkGreen z-0"
      />
      <div className="container overflow-x-hidden relative">
        <h1
          className={`${t.heading} pt-100 md:pt-120 desk:pt-150 mb-30 md:mb-0 text-right md:text-left font-bold uppercase text-darkGreen`}
        >
          Программа
          <br />
          тура
        </h1>

        {tour.map((touritem, i) => {
          const isEven = (i + 1) % 2 === 0;
          const dir: Dir = isMobile || isEven ? "right" : "left";
          return (
            <motion.div
              key={`${i}-${isMobile ? "m" : "d"}`}
              custom={dir}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.01 }}
              className={`
                md:max-w-[50%] flex
                ${
                  isEven
                    ? "md:mr-auto md:flex-row-reverse md:text-right"
                    : "md:ml-auto md:flex-row md:text-left"
                }
              `}
            >
              <div
                className={`
                text-beige font-bold
                ${isEven ? "md:text-left" : "md:text-right"}
                `}
              >
                <div
                  className={`
                  ${
                    isEven
                      ? "left-[0.31rem] relative md:left-[1.68rem] desk:left-0"
                      : "left-[0.31rem] md:left-auto relative md:right-[1.68rem] desk:right-0"
                  }
                  `}
                >
                  <p className="text-40 md:text-60 desk:text-100 leading-none">
                    {touritem.dayNumber}
                  </p>
                  <p className="text-10 font-semibold md:text-30 desk:text-40">
                    {touritem.dayLabel}
                  </p>
                </div>
              </div>
              <div
                className={` flex flex-col gap-10 mb-10 md:mb-0 md:gap-30
                ${
                  isEven
                    ? "ml-[2.43rem] md:ml-0 desk:mr-50"
                    : "ml-[2.43rem] md:ml-0 desk:ml-50"
                }
                `}
              >
                <p className="md:backdrop-blur-3xl text-18 md:text-24 desk:text-30 font-medium text-darkGreen">
                  {touritem.title}
                </p>
                <div className="text-darkGreen font-normal text-10 md:text-14 desk:text-18">
                  <p className="md:backdrop-blur-3xl mb-10">
                    {touritem.activities[0]}
                  </p>
                  <p className="md:backdrop-blur-3xl mb-10">
                    {touritem.activities[1]}
                  </p>
                  <p className="md:backdrop-blur-3xl mb-10">
                    {touritem.activities[2]}
                  </p>
                  <p className="md:backdrop-blur-3xl">
                    {touritem.activities[3]}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
