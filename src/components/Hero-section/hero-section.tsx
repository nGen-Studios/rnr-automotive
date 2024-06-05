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
    <section className="overflow-hidden h-[55rem]">
      <Image
        className="w-full h-screen brightness-50 object-cover object-[position:0,-30rem]"
        src={backgroundImage}
        alt="A car being serviced"
      />
      <div className="absolute top-20 left-[36rem] text-secondary text-8xl tracking-tighter flex">
        <div className="scale-x-[-1] mr-[-3px]">R</div>nR automotive
      </div>
      <BookingButton className="absolute top-[48.5rem] left-[50.5rem] px-5 p-3 text-4xl" />
    </section>
  );
}
