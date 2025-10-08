import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";
import { Button } from "@/app/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneField } from "@/app/components/ui/PhoneField";
import { sendContact } from "@/app/actions/sendContact";

export default function ContactsForm() {
  return (
    <form
      className={`${t["body-lg"]} flex flex-col gap-4 text-darkGreen w-full`}
    >
      <input
        className="bg-transparent md:py-[1.25rem] md:pl-[2.18rem] border border-darkGreen focus:border-sand focus:outline-none rounded-[3.12rem] py-[0.93rem] pl-[1.87rem]"
        type="text"
        name="Имя"
        placeholder="Имя"
        minLength={2}
        required
      />
      <PhoneField inputClassName="!border-darkGreen !text-darkGreen" name="Телефон" />
      <div className="flex gap-[0.62rem] items-center">
        <Checkbox
          className="h-[1rem] w-[1rem] border border-darkGreen rounded-[0.2rem] data-[state=checked]:bg-transparent
          data-[state=checked]:text-darkGreen data-[state=checked]:border-darkGreen"
          required
        />
        <p className={`${t["overline"]}`}>
          Я согласен с{" "}
          <Link className="underline" href="/privacy-policy">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
      <Button type="submit">Отправить</Button>
    </form>
  );
}
