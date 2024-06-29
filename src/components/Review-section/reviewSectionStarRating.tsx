"use client";

import { useState } from "react";

type StarRatingProps = {
  starArray: number[];
  changeBackgroundHandler?: (num: number) => void;
};

export function StarRating({
  starArray,
  changeBackgroundHandler,
}: StarRatingProps) {
  return starArray.map((item, index) => {
    return (
      <button
        key={index}
        type="button"
        onClick={() =>
          changeBackgroundHandler && changeBackgroundHandler(index + 1)
        }
        className="mb-5"
      >
        <svg
          className={
            item === 1 ? "fill-secondary w-6 h-6 mr-2" : "w-6 h-6 mr-2"
          }
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 117.19"
        >
          <title>black-star</title>
          <path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z" />
        </svg>
      </button>
    );
  });
}
