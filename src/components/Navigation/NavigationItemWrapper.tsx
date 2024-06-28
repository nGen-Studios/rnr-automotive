"use client";

import Link from "next/link";
import { useState } from "react";

import NavigationItems from "./NavigationItems";
import BookingButton from "./BookingButton";

export default function NavigationItemWrapper() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleHandler() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <ul className="flex items-center justify-evenly">
        <NavigationItems className="tablet:hidden" />
        <li>
          {!openMenu && (
            <Link href="/contact">
              <BookingButton onClick={toggleHandler} />
            </Link>
          )}
        </li>
        <li>
          {!openMenu && (
            <button
              onClick={toggleHandler}
              className="tablet:block hidden cursor-pointer tablet:mr-10 mobile:mr-4"
            >
              <span className="h-[3px] w-8 bg-black block" />
              <span className="h-[3px] w-8 bg-black block my-2" />
              <span className="h-[3px] w-8 bg-black block" />
            </button>
          )}
          {openMenu && (
            <button onClick={toggleHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="absolute top-5 right-5"
              >
                <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
              </svg>
            </button>
          )}
        </li>
      </ul>
      {openMenu && (
        <div
          onClick={toggleHandler}
          className="flex flex-col items-center justify-center w-56 bg-primary/[0.6] absolute top-20 right-0"
        >
          <NavigationItems className="my-5 mr-0" />
          <Link href="/contact">
            <BookingButton className="mb-5 tablet:mr-0" />
          </Link>
        </div>
      )}
    </>
  );
}
