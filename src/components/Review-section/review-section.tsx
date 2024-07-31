"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import next_back_button from "@/public/icons/next.png";
import BookingButton from "../Navigation/BookingButton";
import ReviewForm, { ReviewFormData } from "./reviewForm";
import { StarRating } from "./reviewSectionStarRating";

export default function ReviewSection() {
  const [showReview, setShowReview] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState<ReviewFormData[]>([]);
  const [activeReview, setActiveReview] = useState(0);

  function reviewClickHandler() {
    setShowForm(true);
    setShowReview(false);
  }

  async function getData() {
    try {
      const response = await fetch("/api/reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      console.log(responseData);

      if (responseData) {
        setShowReview(true);
      }

      return responseData;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function formatReviewData(data: ReviewFormData): ReviewFormData[] {
    if (!data) {
      return [];
    }

    const reviewArray: ReviewFormData[] = [];

    Object.keys(data).map((dataKey) => {
      reviewArray.push(data[dataKey]);
    });

    return reviewArray
      .filter((item) => item.starRating >= 3)
      .splice(-10, reviewArray.length);
  }

  useEffect(() => {
    getData().then((reviewData) => {
      setData(formatReviewData(reviewData));
    });
  }, []);

  async function refreshReviews() {
    const reviewData = await getData();
    setData(formatReviewData(reviewData));
  }

  function prevButtonHandler() {
    if (activeReview - 1 < 0) {
      return;
    }

    setActiveReview(activeReview - 1);
  }

  function nextButtonHandler() {
    if (activeReview + 1 > data.length - 1) {
      return;
    }

    setActiveReview(activeReview + 1);
    console.log(activeReview);
  }

  return (
    <section className="mb-20">
      <h1 className="text-center text-4xl mb-2">Reviews</h1>
      <p className="text-center text-2xl mb-5 laptop:text-2xl tablet:text-2xl">
        Satisfied clients
      </p>
      {showReview && data.length > 0 && (
        <div>
          <div className="flex items-center justify-center mb-5">
            <button
              onClick={prevButtonHandler}
              className="hover:scale-110 mr-5"
            >
              <Image
                className="scale-x-[-1]"
                src={next_back_button}
                alt="back button"
                width={50}
                height={50}
              />
            </button>

            <ul className="bg-primary w-1/2 h-auto p-5 tablet:w-2/3">
              {data.map(({ name, review, starRating }, index) => {
                const getStarRating = () => {
                  const stars = [0, 0, 0, 0, 0];
                  for (let i = 0; i < starRating; i++) {
                    stars[i] = 1;
                  }

                  return stars;
                };

                return activeReview === index ? (
                  <li key={index}>
                    <div>
                      <StarRating starArray={getStarRating()} />
                    </div>
                    <p className="text-center text-3xl  laptop:text-2xl mobile:text-xl">
                      {review}
                      <span> - {name}</span>
                    </p>
                  </li>
                ) : null;
              })}
            </ul>

            <button
              onClick={nextButtonHandler}
              className="hover:scale-110 ml-5"
            >
              <Image
                src={next_back_button}
                alt="next button"
                width={50}
                height={50}
              />
            </button>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="bg-primary w-5 h-5 rounded-full mr-5"></div>
            <div className="bg-secondary w-5 h-5 rounded-full mr-5"></div>
            <div className="bg-primary w-5 h-5 rounded-full mr-5"></div>
          </div> */}
        </div>
      )}

      {!showForm && (
        <div className="w-full flex items-center justify-center">
          <BookingButton
            onClick={reviewClickHandler}
            className="mr-5 mt-5 tablet:p-5"
          >
            Write a review
          </BookingButton>
        </div>
      )}

      {showForm && (
        <ReviewForm
          showForm={showForm}
          setShowForm={setShowForm}
          showReview={showReview}
          setShowReview={setShowReview}
          refreshReviews={refreshReviews}
        />
      )}
    </section>
  );
}
