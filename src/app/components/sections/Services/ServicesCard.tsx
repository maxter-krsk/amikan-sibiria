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
    <>
      {servicesCard.map((carditem, i) => (
        <div className="">
            <Image
              src={`${carditem.image}`}
              width={200}
              height={200}
              alt="Изображение"
            />
        </div>
      ))}
    </>
  );
}
