import Image from "next/image";
import heading from "@/public/logo/RNR Automotive Logo for website.png";

export default function Introduction() {
  return (
    <section className="mb-20">
      <Image
        className="m-auto w-1/3 h-80 mb-5 tablet:w-1/2 tablet:h-60 mobile:w-2/3 mobile:h-52"
        src={heading}
        alt="website logo"
      />
      <div className="bg-primary w-4/5 h-auto m-auto">
        <p className="py-6 px-10 text-2xl tablet:text-3xl mobile:text-xl">
          RNR was a lifetime dream that became a reality, delivering years of
          experience to the community at affordable rates. We aim to create an
          environment that is less corporate and more personalized, making
          individuals feel like family.
        </p>
      </div>
    </section>
  );
}
