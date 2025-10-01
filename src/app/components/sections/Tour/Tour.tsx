import t from "@/app/styles/modules/typography.module.css";
export default function Tour() {
  return (
    <section className="relative py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[259px] bg-darkGreen z-0"
      />
      <div className="container relative z-10">
        <h1
          className={`${t.heading} font-bold uppercase text-darkGreen w-[50%]`}
        >
          Программа тура
        </h1>
        <div className="ml-auto max-w-[52%] flex gap-[2.5rem] md:gap-[1.87rem] desk:gap-[3.12rem]">
          <p className="font-bold text-beige text-[3.12rem] text-right">
            День 1
          </p>
          <div className="flex flex-col gap-[1.87rem]">
            <p>Прибытие в Абакан</p>
            <p>
              После приезда в Абакан вас встретят, отвезут на завтрак и
              пригласят на экскурсию в историко‑этнографический комплекс
              «Шушенское»
            </p>
            <p>
              Вы посетите дом‑музей им. В.И. Ленина, насладитесь обедом и
              отправитесь к Саяно‑Шушенской ГЭС, где расположился наш
              плавкомплекс
            </p>
            <p>Вечером — размещение, ужин и отдых на воде</p>
          </div>
        </div>

        <div className="mr-auto max-w-[80%] pr-4 flex gap-[2.5rem] md:gap-[1.87rem] desk:gap-[3.12rem]">
          <div className="flex flex-col gap-[1.87rem] text-right">
            <p>Прибытие в Абакан</p>
            <p>
              После приезда в Абакан вас встретят, отвезут на завтрак и
              пригласят на экскурсию в историко‑этнографический комплекс
              «Шушенское»
            </p>
            <p>
              Вы посетите дом‑музей им. В.И. Ленина, насладитесь обедом и
              отправитесь к Саяно‑Шушенской ГЭС, где расположился наш
              плавкомплекс
            </p>
            <p>Вечером — размещение, ужин и отдых на воде</p>
          </div>
          <p className="font-bold text-beige text-[3.12rem] w-full">2 День</p>
        </div>
      </div>
    </section>
  );
}
