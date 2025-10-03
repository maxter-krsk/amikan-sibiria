"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FeedbackCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const card = [
    {
      image: "/images/feedbacks/alex-photo2x.jpg",
      name: "Александр",
      yearsOld: "41 год",
      city: "Москва",
      caption:
        "Эта поездка превзошла все ожидания! Особенно поразила организация: вас встречают в аэропорту, все трансферы чётко по расписанию, на борту всегда свежая рыба и блюда от поваров. Рыбалка впечатлила даже бывалых — такие трофеи редко где поймаешь. Обязательно поедем ещё раз всей компанией.",
    },
    {
      image: "/images/feedbacks/irina-sergey2x.jpg",
      name: "Ирина и Сергей",
      yearsOld: "37 лет",
      city: "Санкт-Петербург",
      caption:
        "На тур отправились всей семьёй, хотели совместить рыбалку и отдых. Было немного страшно, так как у нас маленький ребёнок, но гиды и повара постоянно помогали, а на плавучей базе было невероятно комфортно. Понравились прогулки на аэролодке по Кантегиру и экскурсия к Саяно-Шушенской ГЭС. Тур идеально подойдёт для тех, кто любит природу без потери комфорта.",
    },
    {
      image: "/images/feedbacks/mihail-photo2x.jpg",
      name: "Михаил",
      yearsOld: "53 года",
      city: "Екатеринбург",
      caption:
        "Премиальный отдых на 100%. Я давно мечтал половить хариуса и тайменя. Евгений не только показал лучшие места, но и устроил настоящую гастрономическую экскурсию: свежепойманная рыба, таёжные блюда, домашние настойки. Понравилась тесная работа с каждым участником.",
    },
    {
      image: "/images/feedbacks/dmitriy-photo2x.jpg",
      name: "Дмитрий",
      yearsOld: "34 года",
      city: "Красноярск",
      caption:
        "Брал тур в подарок отцу на юбилей. Впечатления — восторг! Отец счастлив от пойманной щуки, я — от природы и заботы команды. Проживание полностью соответствует заявленному уровню: чистые каюты с панорамными окнами, баня, вкусные ужины. Спасибо Амикану за незабываемый отдых.",
    },
    {
      image: "/images/feedbacks/elena-photo2x.jpg",
      name: "Елена",
      yearsOld: "29 лет",
      city: "Новосибирск",
      caption:
        "Я не профессионал в рыбалке, но всегда хотела почувствовать атмосферу настоящей экспедиции. Тур оказался сбалансированным: и активность, и отдых. Вернулась с ощущением, будто побывала в другом мире!",
    },
  ];

  useEffect(() => {
    
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {card.map((carditem, i) => (
            <CarouselItem
              key={i}
              className="basis-full md:basis-1/2 desk:basis-1/3.5 pl-[1.25rem] select-none"
            >
              <div className="bg-lightGreen  text-beige  rounded-[1.87rem] p-[1.87rem] min-h-[23rem]">
                <div className="flex gap-[1.25rem] mb-[1.25rem]">
                  <Image
                    src={`${carditem.image}`}
                    width={92}
                    height={92}
                    alt="Фотография Александра"
                    className="rounded-full"
                  />
                  <div>
                    <p>
                      <span className="font-semibold">{`${carditem.name}`}</span>
                      {", "}
                      {`${carditem.yearsOld}`}
                    </p>
                    <span>{`${carditem.city}`}</span>
                  </div>
                </div>
                <div className="flex gap-[0.62rem] items-start">
                  <span className="text-[2.5rem] font-semibold">{"“"}</span>
                  <p className="mt-[0.55rem] text-[1.12rem]">{`${carditem.caption}`}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-4 gap-2">
        {card.map((_, i) => (
          <button
            key={i}
            className={`cursor-pointer w-[0.62rem] h-[0.62rem] rounded-full transition-colors ${
              i === currentSlide ? "bg-darkGreen" : "bg-[#A4A69B]"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}
