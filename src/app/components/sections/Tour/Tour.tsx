import t from "@/app/styles/modules/typography.module.css";
export default function Tour() {
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
    <section className="relative py-10 bg-no-repeat bg-cover [background-position:-270px_70px] md:bg-[url('/icons/ui/background-line.svg')] bg-none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-5 md:left-1/2 md:-translate-x-1/2 w-[48px] md:w-[8.37rem] desk:w-[16.18rem] bg-darkGreen z-0"
      />
      <div className="container relative z-10">
        <h1
          className={`${t.heading} mb-[1.87rem] md:mb-0 text-right md:text-left font-bold uppercase text-darkGreen`}
        >
          Программа
          <br />
          тура
        </h1>
        {tour.map((touritem, i) => {
          const isEven = (i + 1) % 2 === 0;
          return (
            <div
              key={i}
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
                      ? "ml-[0.3rem] md:relative md:left-[1.68rem] desk:left-0"
                      : "ml-[0.3rem] md:relative md:right-[1.68rem] desk:right-0"
                  }
                  `}
                >
                  <p className="text-[2.5rem] md:text-[3.75rem] desk:text-[6.25rem] leading-none">
                    {touritem.dayNumber}
                  </p>
                  <p className="text-[0.62rem] font-semibold md:text-[1.87rem] desk:text-[2.5rem]">
                    {touritem.dayLabel}
                  </p>
                </div>
              </div>
              <div
                className={` flex flex-col gap-[0.62rem] md:gap-[1.87rem]
                ${
                  isEven
                    ? "ml-[1.86rem] md:ml-0 desk:mr-[3.12rem]"
                    : "ml-[1.86rem] md:ml-0 desk:ml-[3.12rem]"
                }
                `}
              >
                <p className="backdrop-blur-3xl text-[1.12rem] md:text-[1.5rem] desk:text-[1.87rem] font-medium text-darkGreen">
                  {touritem.title}
                </p>
                <div className="flex flex-col gap-[0.93rem] md:gap-[1.25rem] desk:gap-[1.87rem] text-darkGreen font-normal text-[0.62rem] md:text-[0.87rem] desk:text-[1.12rem]">
                  <p className="backdrop-blur-3xl">{touritem.activities[0]}</p>
                  <p className="backdrop-blur-3xl">{touritem.activities[1]}</p>
                  <p className="backdrop-blur-3xl">{touritem.activities[2]}</p>
                  <p className="backdrop-blur-3xl">{touritem.activities[3]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
