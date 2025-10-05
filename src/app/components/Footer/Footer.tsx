import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FooterNav from "./FooterNav";
import FooterContacts from "./FooterContacts";
import FooterForm from "./FooterForm";
import FooterPolicy from "./FooterPolicy";
import FooterLegal from "./FooterLegal";
import FooterCopyright from "./FooterCopyright";

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
            className="mb-[1.8rem] desk:mb-[3.1rem] w-[4.87rem] h-[4.87rem] md:w-[6.75rem] md:h-[6.75rem] desk:w-[7.87rem] desk:h-[7.87rem]"
          />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1.87rem] md:gap-[3.12rem] desk:gap-4 auto-rows-auto">
          <FooterNav className="col-start-1 row-start-1" />
          <FooterContacts className="col-start-2 row-start-1 md:col-start-1 md:col-span-2 md:row-start-2 lg:col-start-2  lg:row-start-1" />
          <FooterForm className="col-start-1 col-span-2 md:col-start-3 md:col-span-0 md:row-start-1 lg:row-span-2 lg:col-start-3 lg:row-start-1" />
          <FooterCopyright className="col-start-1 col-span-2 row-start-5 md:col-span-1 md:row-start-3 md:col-start-3 lg:col-start-1 lg:row-start-4" />
          <FooterLegal className="col-span-2 md:col-start-1 md:col-span-2 md:row-start-3 lg:col-start-2 lg:row-start-1 lg:relative lg:top-[9rem] lg:w-fit" />
          <FooterPolicy className="col-start-1 col-span-2 row-start-4 md:col-span-1 md:col-start-3 md:row-start-2 lg:row-start-4 lg:col-start-2" />
        </div>
      </div>
    </footer>
  );
}
