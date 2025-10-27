import Image from "next/image";
import BookingButton from "../Navigation/BookingButton";

import backgroundImage from "@/public/redcar.jpg";

export default function HeroSection() {
  return (
    <section className="overflow-hidden h-[45rem] laptop:h-[35rem] tablet:h-[30rem] mobile:h-[25rem] mb-12">
      <Image
        className="w-full h-screen brightness-75 object-cover object-[0,-28rem] desktop:object-[0,-22rem] laptop:object-[0,-20rem] tablet:object-[0,-5rem] mobile:object-[-6rem,-8rem]"
        src={backgroundImage}
        alt="A car being serviced"
      />
    </section>
  );
}
