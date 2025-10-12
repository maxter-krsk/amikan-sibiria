import AdditionalFeatures from "./AdditionalFeatures";
import MainFeatures from "./MainFeatures";

export default function Features() {
  return (
    <section className="mt-[6.25rem] md:mt-[7.5rem] desk:mt-[9.38rem]">
      <div className="flex flex-col gap-[6.25rem] md:gap-[7.5rem] desk:gap-[9.38rem]">
        <MainFeatures />
        <AdditionalFeatures />
      </div>
    </section>
  );
}
