import Image from "next/image";
import Link from "next/Link";
import Contacts from "@/app/components/sections/Contacts/Contacts";
import Feedbacks from "@/app/components/sections/Feedbacks/Feedbacks";

export default function Home() {
  return (
    <>
      <Feedbacks />
      <Contacts />
    </>
  );
}
