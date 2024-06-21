import next_back_button from "@/public/icons/next.png";
import Image from "next/image";

import { reviewSectionData } from "./reviewSectionData";
import { StarRating } from "../Service-section/serviceSectionStarRating";
import BookingButton from "../Navigation/BookingButton";

export default function ReviewSection() {
  return (
    <section className="mb-20">
      <h1 className="text-center text-4xl mb-2">Reviews</h1>
      <p className="text-center text-2xl mb-5 laptop:text-2xl tablet:text-2xl">
        Satisfied clients
      </p>
      <div className="flex items-center justify-center mb-5">
        <button className="hover:scale-110 mr-5">
          <Image
            className="scale-x-[-1]"
            src={next_back_button}
            alt="back button"
            width={50}
            height={50}
          />
        </button>
        <div className="bg-primary w-1/2 h-auto p-5 mobile:w-2/3">
          <StarRating />
          <p className="text-center text-xl text-wrap px-10 pb-7 laptop:text-2xl tablet:text-xl mobile:text-lg">
            {reviewSectionData[0].review} -{reviewSectionData[0].name}
          </p>
        </div>
        <button className="hover:scale-110 ml-5">
          <Image
            src={next_back_button}
            alt="next button"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-primary w-5 h-5 rounded-full mr-5"></div>
        <div className="bg-secondary w-5 h-5 rounded-full mr-5"></div>
        <div className="bg-primary w-5 h-5 rounded-full mr-5"></div>
      </div>
      <div className="w-full flex items-center justify-center">
        <BookingButton className="mr-5 mt-5 tablet:p-5">
          Write a review
        </BookingButton>
      </div>
    </section>
  );
}
