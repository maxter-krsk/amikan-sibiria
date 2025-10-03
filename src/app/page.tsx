import Image from "next/image";
import Link from "next/Link";
import Contacts from "@/app/components/sections/Contacts/Contacts";
import Gallery from "@/app/components/sections/Gallery/Gallery";
import Hero from "./components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Contacts />
    </>
  );
}
