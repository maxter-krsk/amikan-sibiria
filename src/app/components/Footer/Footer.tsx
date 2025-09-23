import Link from "next/link";
import Image from "next/image";
import FooterNav from "./FooterNav";
import t from "@/app/styles/modules/typography.module.css";

export default function Footer() {
  return (
    <footer className="bg-darkGreen pt-[1.25rem] pb-[2.5rem] md:pt-[1.8rem] md:pb-[4.3rem] desk:pb-[4.6rem]">
      <div className="container">
        <Image
          src="/icons/logos/logo-light.svg"
          alt="Логотип Амикан"
          width={126}
          height={126}
        />
        <FooterNav />
      </div>
    </footer>
  );
}
