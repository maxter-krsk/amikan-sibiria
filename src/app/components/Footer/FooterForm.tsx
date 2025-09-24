import t from "@/app/styles/modules/typography.module.css";

export default function FooterForm() {
  return (
    <div>
      <p
        className={`${t["body-lg"]} text-beige hidden md:block mb-[1.25rem] font-medium`}
      >
        Оставьте свои данные, и мы свяжемся с вами
      </p>
      <form className={`${t["body-lg"]} flex flex-col gap-4 text-beige`}>
        <input
          className="bg-transparent md:py-[1.25rem] md:pl-[2.18rem] border border-beige rounded-[3.12rem] py-[0.93rem] pl-[1.87rem]"
          type="text"
          name="Имя"
          placeholder="Ваше имя"
          value="Имя"
        />
        <input
          className="bg-transparent md:py-[1.25rem] md:pl-[2.18rem] border border-beige rounded-[3.12rem] py-[0.93rem] pl-[1.87rem]"
          type="tel"
          name="Телефон"
          placeholder="Ваш телефон"
          value="+7 (XXX) XXX-XX-XX"
        />
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Отправить
        </button>
      </form>
    </div>
  );
}
