import t from "@/app/styles/modules/typography.module.css";

export default function FooterForm() {
  return (
    <div>
      <p
        className={`${t["body-lg"]} hidden font-medium text-beige mb-[1.25rem] md:block`}
      >
        Оставьте свои данные, и мы свяжемся с вами
      </p>
      <form
        className={`${t["body-lg"]} flex flex-col gap-[0.62rem] text-beige`}
      >
        <input
          className="rounded-[3.12rem] border border-beige md:py-[1.25rem] md:pl-[2.18rem] py-[0.93rem] pl-[1.87rem]"
          type="text"
          placeholder="Ваше имя"
          value="Имя"
        />
        <input
          className="rounded-[3.12rem] border border-beige md:py-[1.25rem] md:pl-[2.18rem] py-[0.93rem] pl-[1.87rem]"
          type="tel"
          placeholder="Ваш телефон"
          value="+7 (XXX) XXX XXX"
        />
        <button
          type="submit"
          className="bg-sand py-[1.25rem] px-[2.18rem] rounded-[3.12rem]"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
