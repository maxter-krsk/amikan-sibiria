type FooterCopyrightProps = {
  className?: string;
};

export default function FooterCopyright({ className }: FooterCopyrightProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="mt-auto text-beige text-14 lg:text-18">
        © Amikan Travel, 2025
      </span>
    </div>
  );
}
