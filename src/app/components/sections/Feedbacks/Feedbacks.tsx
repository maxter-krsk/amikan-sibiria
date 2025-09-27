import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeedbackCard from "./FeedbackCard";

export default function Feedbacks() {
  return (
    <section>
        <FeedbackCard />
    </section>
  );
}
