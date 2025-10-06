import t from "@/app/styles/modules/typography.module.css";

type FooterLegalProps = {
  className?: string;
};
export default function FooterLegal({ className }: FooterLegalProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-[0.62rem] text-beige text-[0.87rem] md:text-[1rem] lg:text-[1.12rem]">
        <p>ИП Березов Е.В.</p>
        <p>ИНН 246505380758</p>
        <p>ОГРН 314246809300071</p>
      </div>
    </div>
  );
}
