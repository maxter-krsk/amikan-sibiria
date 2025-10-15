type FooterLegalProps = {
  className?: string;
};
export default function FooterLegal({ className }: FooterLegalProps) {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-10 text-beige text-14 md:text-16 lg:text-18">
        <p>ИП Березов Е.В.</p>
        <p>ИНН 246505380758</p>
        <p>ОГРН 314246809300071</p>
      </div>
    </div>
  );
}
