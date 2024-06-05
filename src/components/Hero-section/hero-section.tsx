import Image from "next/image";
import BookingButton from "../Navigation/BookingButton";

import backgroundImage3 from "@/public/Firefly 1980 to 2000 car being serviced 58565.jpg"; //Not bad
import backgroundImage4 from "@/public/Firefly 1990 car being serviced 33218.jpg"; //Not bad
import backgroundImage5 from "@/public/Firefly 1990 car being serviced 73654.jpg"; //Nice

//red car
import backgroundImage from "@/public/redcar1.jpg";
import backgroundImage2 from "@/public/redcar2.jpg";
import backgroundImage6 from "@/public/redcar3.jpg"; //Like hom

export default function HeroSection() {
  return (
    <section className="overflow-hidden h-[55rem] tablet:h[45rem] mobile:h-[35rem]">
      <Image
        className="w-full h-screen brightness-75 object-cover object-[0,-28rem] desktop:object-[0,-22rem] laptop:object-[0,-20rem] tablet:object-[0,-5rem] mobile:object-[-6rem,-8rem]"
        src={backgroundImage2}
        alt="A car being serviced"
      />

      <div className="absolute font-extrabold bg-transparent top-32 left-1/2 translate-x-[-50%] rounded-md text-secondary text-8xl tracking-tighter px-5 py-2 flex laptop:text-7xl tablet:text-6xl tablet:w-[29rem] mobile:text-4xl mobile:w-[19rem] ">
        <div className="scale-x-[-1] mr-[-3px]">R</div>nR automotive
      </div>
    </section>
  );
}
