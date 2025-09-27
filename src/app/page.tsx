import Image from "next/image";
import Link from "next/Link";
import Contacts from "@/app/components/sections/Contacts/Contacts";
import Services from "@/app/components/sections/Services/Services";

export default function Home() {
  return (
    <>
      <Services />
      <Contacts />
    </>
  );
}
