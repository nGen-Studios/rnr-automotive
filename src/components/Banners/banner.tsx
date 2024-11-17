import Image from "next/image";
import home from "@/public/icons/home-white.png";
import clock from "@/public/icons/clock.png";

export default function Banner() {
  return (
    <section className="bg-secondary text-white mb-20 p-10 relative overflow-hidden mobile:p-5">
      <div className="bg-black/[0.6] w-96 flex items-center justify-center gap-5 py-2 mb-2 absolute -rotate-[40deg] top-12 -left-20 text-xl tablet:top-[40px] tablet:-left-[110px] mobile:top-0 mobile:left-0 mobile:rotate-0 mobile:w-full">
        <Image src={clock} alt="clock icon" />
        <p>Coming soon!</p>
      </div>
      <div className="flex items-center justify-center gap-10 mobile:flex-col mobile:text-center mobile:gap-5 mobile:p-10 mobile:w-full">
        <Image src={home} alt="home icon" />
        <div>
          <p className="text-2xl mobile:text-base ">
            Fast, Friendly Service — Right to Your Door, Within 100km!
          </p>
          <p className="text-center text-sm">T & C's apply</p>
        </div>
      </div>
    </section>
  );
}
