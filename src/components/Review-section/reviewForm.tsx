import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import BookingButton from "../Navigation/BookingButton";
import { StarRating } from "./reviewSectionStarRating";

type reviewFormProps = {
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
  showReview: boolean;
  setShowReview: Dispatch<SetStateAction<boolean>>;
  refreshReviews: () => Promise<void>;
};

export type ReviewFormData = {
  [key: string]: any;
  name: string;
  review: string;
  starRating: number;
};

export default function ReviewForm({
  showForm,
  setShowForm,
  showReview,
  setShowReview,
  refreshReviews,
}: reviewFormProps) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [starArray, setStarArray] = useState([0, 0, 0, 0, 0]);
  const [starRating, setStarRating] = useState(0);

  function nameChangeHandler(event: any) {
    setName(event.target.value);
  }

  function reviewChangeHandler(event: any) {
    setReview(event.target.value);
  }

  function changeBackgroundHandler(num: number) {
    const starArray = [0, 0, 0, 0, 0];

    for (let i = 0; i < num; i++) {
      starArray[i] = 1;
    }

    setStarArray([...starArray]);
    setStarRating(num);
  }

  const reviewFormData = {
    name,
    review,
    starRating,
  };

  async function reviewSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://rnr-automotives-default-rtdb.firebaseio.com/reviews.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewFormData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setShowForm(false);
      setShowReview(true);

      await refreshReviews();
      console.log(reviewFormData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  function closeModuleHandler() {
    setShowForm(false);
    setShowReview(true);
  }

  return (
    <div className="m-auto border-4 rounded-lg border-secondary w-1/2 h-auto tablet:w-2/3 mobile:w-3/4">
      <form
        onSubmit={reviewSubmitHandler}
        className="p-5 w-full flex flex-col items-center"
      >
        <div className="w-full">
          <label className="text-xl" htmlFor="form-name">
            First name:
          </label>
          <br />
          <input
            id="form-name"
            required
            autoComplete="name"
            name="name"
            placeholder="First Name"
            className="w-full h-8 bg-primary font-sans pl-2 mb-5 placeholder-black/[0.6]"
            onChange={nameChangeHandler}
          />

          <label className="text-xl" htmlFor="form-name">
            Review:
          </label>
          <br />
          <textarea
            id="form-name"
            required
            autoComplete="name"
            name="name"
            placeholder="First Name"
            className="w-full h-20 bg-primary pl-2 font-sans mb-5 placeholder-black/[0.6]"
            onChange={reviewChangeHandler}
          />
          <StarRating
            changeBackgroundHandler={changeBackgroundHandler}
            starArray={starArray}
          />
        </div>
        <div className="flex items-center justify-evenly w-full">
          <BookingButton className="w-1/4 m-auto tablet:ml-0 tablet:w-1/3">
            Sent
          </BookingButton>
          <BookingButton
            type="button"
            onClick={closeModuleHandler}
            className="w-1/4 m-auto tablet:ml-0 tablet:w-1/3"
          >
            Cancel
          </BookingButton>
        </div>
      </form>
    </div>
  );
}
