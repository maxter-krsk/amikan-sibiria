import Image from "next/image";

type PhoneIconProps = {
  className?: string;
};

export function PhoneIcon({ className }: PhoneIconProps) {
  return (
    <Image
      src="/icons/ui/socials-icons/phone.svg"
      width={24}
      height={24}
      alt="Телефон"
      className={className}
    />
  );
}
