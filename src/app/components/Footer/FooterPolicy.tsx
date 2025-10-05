import Link from "next/link";
import t from "@/app/styles/modules/typography.module.css";

type FooterPolicyProps = {
  className?: string;
};

export default function FooterPolicy({ className }: FooterPolicyProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-[4.18rem] text-beige">
        <div className={`${t["overline"]} flex flex-col gap-[0.62rem]`}>
          <Link href="#">Политика конфиденциальности</Link>
          <Link href="#">Политика обработки персональных данных</Link>
          <Link href="#">Политика использования cookie</Link>
          <Link href="#">Пользовательское соглашение</Link>
        </div>
      </div>
    </div>
  );
}
