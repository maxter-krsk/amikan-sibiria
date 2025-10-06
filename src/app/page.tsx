import Faq from "@/app/components/sections/FAQ/Faq";
import Contacts from "@/app/components/sections/Contacts/Contacts";
import Feedbacks from "@/app/components/sections/Feedbacks/Feedbacks";
import Gallery from "@/app/components/sections/Gallery/Gallery";
import Hero from "./components/sections/Hero/Hero";
import Tour from "./components/sections/Tour/Tour";

export default function Home() {
  return (
    <>
      <Hero />
      <Tour />
      <Feedbacks />
      <Gallery />
      <Faq />
      <Contacts />
    </>
  );
}
