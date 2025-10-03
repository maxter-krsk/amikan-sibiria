import Link from "next/link";
import Image from "next/image";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";
import FooterForm from "./FooterForm";
import FooterPolicy from "./FooterPolicy";

export default function Footer() {
  return (
    <footer className="bg-darkGreen pt-[1.25rem] pb-[2.5rem] md:pt-[1.8rem] md:pb-[4.3rem] desk:pb-[4.6rem]">
      <div className="container">
        <Link href="/">
          <Image
            src="/icons/logos/logo-light.svg"
            alt="Логотип Амикан"
            width={126}
            height={126}
            className="mb-[1.8rem] desk:mb-[3.1rem]"
          />
        </Link>
        <div className="flex justify-between">
          <FooterNav />
          <div>
            <FooterContacts />
            <FooterPolicy />
          </div>
          <FooterForm />
        </div>
      </div>
    </footer>
  );
}
