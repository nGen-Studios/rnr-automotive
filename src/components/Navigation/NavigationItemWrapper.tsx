"use client";

import Link from "next/link";
import { useState } from "react";

import NavigationItems from "./NavigationItems";
import BookingButton from "./BookingButton";
import { usePathname } from "next/navigation";

export default function NavigationItemWrapper() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();

  function toggleHandler() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <ul className="flex items-center justify-evenly">
        <NavigationItems className="tablet:hidden" />
        <li>
          {!openMenu && !pathName.includes("contact") && (
            <Link href="/contact">
              <BookingButton />
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
            <button
              className="absolute top-5 right-5 z-10"
              onClick={toggleHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
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
          className="fixed top-0 left-0  w-full h-full bg-primary"
        >
          <div className="flex flex-col items-center justify-start mt-16">
            <NavigationItems className="text-4xl my-2 mr-0" />
            <Link href="/contact">
              <BookingButton className="mt-5 mr-auto tablet:!mx-auto" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
