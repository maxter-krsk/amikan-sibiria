import Image from "next/image";

export default function ServicesCard() {
  const servicesCard = [
    {
      image: "/images/included/accommodation.jpg",
      title: "Проживание (плавучая база, таежная база, отель со спа)",
    },
    {
      image: "/images/included/food.jpg",
      title: "Питание на всём маршруте — услуги профессиональных поваров",
    },
    {
      image: "/images/included/various-services.jpg",
      title:
        "Услуги сертифицированных гидов, медицинское сопровождение и спутниковая связь",
    },
    {
      image: "/images/included/trnasfers.jpg",
      title: "Трансферы между локациями",
    },
    {
      image: "/images/included/rent.jpg",
      title: "Аренда рыболовного и туристического оборудования",
    },
  ];

  return (
    <div className="space-y-[1.25rem]">
      <div className="flex flex-col md:flex-row gap-[1.25rem]">
        {servicesCard.slice(0, 2).map((card) => (
          <div key={card.title} className="flex-1">
            <div className="relative overflow-hidden rounded-[1.87rem] aspect-[3/2] md:aspect-[16/9]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="block w-full h-auto object-cover"
              />
              <h3 className="absolute inset-x-0 bottom-0 m-0 p-[1.25rem] md:p-[0.93rem] desk:p-[1.87rem] text-beige text-[0.75rem] desk:text-[1.5rem] font-semibold bg-gradient-to-t from-[#142B23E6] via-[#142B2380] to-[#142B2300]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        {servicesCard.slice(2).map((card) => (
          <div key={card.title} className="flex-1">
            <div className="relative overflow-hidden rounded-[1.25rem] md:rounded-[1.87rem] aspect-[3/2] md:aspect-[4/3]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-[30%_30%]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <h3 className="absolute inset-x-0 bottom-0 m-0 p-20 md:p-15 desk:p-30 text-beige text-12 desk:text-24 font-semibold bg-gradient-to-t from-[#142B23E6] via-[#142B2380] to-[#142B2300]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
