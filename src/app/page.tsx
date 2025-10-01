import Image from "next/image";
import Link from "next/Link";
import Contacts from "@/app/components/sections/Contacts/Contacts";
import Hero from "./components/sections/Hero/Hero";
import Tour from "./components/sections/Tour/Tour";

export default function Home() {
  return (
    <>
      <Hero />
      <Tour />
      <Contacts />
    </>
  );
}
