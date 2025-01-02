"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import home from "@/public/icons/home-white.png";
import clock from "@/public/icons/clock.png";

export default function Banner() {
	const [hideCountdownInfo, setHideCountdownInfo] = useState(true)
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	  });

	useEffect(()=> {
		// Set target date (6th January 2025, 08:00 AM)
		const targetDate = new Date("2025-01-06T08:00:00").getTime();

		const updateCountdown = () => {
			const now = new Date().getTime();
			const difference = targetDate - now;
	  
			if (difference <= 0) {
			  setTimeLeft({
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			  });
			  setHideCountdownInfo(true); 
			  return;
			}

			setHideCountdownInfo(false); 
	  
			// Calculate days, hours, minutes, and seconds left
			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);
	  
			setTimeLeft({ days, hours, minutes, seconds });

		  };

		  // Call the function initially
		  updateCountdown();

		  // Set an interval to update every second
		  const timer = setInterval(updateCountdown, 1000);

		  // Cleanup the interval when the component is unmounted
		  return () => clearInterval(timer);
	},[])


  return (
    <section className="bg-secondary text-white mb-20 p-10 relative overflow-hidden mobile:p-5">
		{!hideCountdownInfo && <div className="bg-black/[0.6] w-96 flex items-center justify-center gap-5 py-2 absolute -rotate-[40deg] top-[80px] -left-[80px] text-xl  tablet:top-0 tablet:left-0 tablet:rotate-0 tablet:w-full">
        <Image src={clock} alt="clock icon" />
        <p>Coming soon!</p>
      </div> }
      
      <div className="flex items-center mb-[10px] justify-center gap-10 tablet:mt-[20px] mobile:flex-col mobile:text-center mobile:gap-5 mobile:mt-[50px] mobile:w-full">
        <Image src={home} alt="home icon" />
        <div>
          <p className="text-2xl tablet:text-center mobile:text-base ">
            Fast, Friendly Service — Right to Your Door, Within 40km!
          </p>
          <p className="text-center text-sm">T & C&apos;s apply</p>
        </div>
      </div>
	  {!hideCountdownInfo &&  <div className="flex items-center justify-center py-[10px] gap-[20px] w-[auto] m-[auto]">
        {/* <Image src={clock} alt="clock icon" /> */}
        <p className="text-[30px] tablet:text-[28px] mobile:text-center mobile:text-[22px]">Countdown to Launch: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</p>
      </div> }
	 
    </section>
  );
}

