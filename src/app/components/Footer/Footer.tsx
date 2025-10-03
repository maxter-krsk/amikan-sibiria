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
        <div className="grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <FooterNav className="col-start-1 row-start-1" />
          <div className="md:col-start-1 md:row-start-2 lg:col-start-2 lg:row-start-1">
            <FooterContacts />
            <FooterPolicy />
          </div>
          <FooterForm className="col-span-2 md:col-span-1 md:row-start-1 lg:col-start-3 lg:row-start-1" />
        </div>
      </div>
    </footer>
  );
}
