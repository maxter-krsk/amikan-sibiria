import AdditionalFeatures from "./AdditionalFeatures";
import MainFeatures from "./MainFeatures";

export default function Features() {
  return (
    <section className="mt-100 md:mt-120 desk:mt-150">
      <div className="flex flex-col gap-100 md:gap-120 desk:gap-150">
        <MainFeatures />
        <AdditionalFeatures />
      </div>
    </section>
  );
}
