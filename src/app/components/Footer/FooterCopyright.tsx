type FooterCopyrightProps = {
  className?: string;
};

export default function FooterCopyright({ className }: FooterCopyrightProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="mt-auto text-beige text-[0.87rem] lg:text-[1.12rem]">
        © Amikan Travel, 2025
      </span>
    </div>
  );
}
