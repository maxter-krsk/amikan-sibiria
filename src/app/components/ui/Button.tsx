import t from "@/app/styles/modules/button.module.css"

export default function FormButton() {
  return (
    <button
      type="submit"
      className={`${t["btn"]} cursor-pointer`}
    >
      Отправить
    </button>
  );
}