"use client";

import Link from "next/link";
import { TermsAndConditions } from "./terms_and_conditions";

type TermsProps = {
  showTerms: boolean;
  termsClick: () => void;
  showPrivacy: boolean;
  privacyClick: () => void;
};

export default function Terms({
  termsClick,
  showTerms,
  privacyClick,
  showPrivacy,
}: TermsProps) {
  return (
    <>
      {!showTerms && !showPrivacy && (
        <div className="text-center underline mb-5">
          <div className="w-52 mb-2 m-auto hover:scale-110">
            <Link onClick={termsClick} href="#">
              Terms and conditions
            </Link>
          </div>

          <div className="w-32 m-auto hover:scale-110">
            <Link onClick={privacyClick} href="#">
              Privacy policy
            </Link>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="w-full h-auto bg-primary mt-24 pb-5 mb-5">
          <div className="flex items-center justify-between mx-12 pt-10 mb-10">
            <h1 className="w-11/12 text-center text-4xl py-3">
              Terms and Conditions
            </h1>
            <button
              onClick={termsClick}
              className="w-1/12 text-center text-xl bg-secondary py-3 rounded-full text-white"
            >
              Back
            </button>
          </div>
          <TermsAndConditions />
        </div>
      )}

      {showPrivacy && (
        <div className="w-full h-screen bg-primary mt-24 mb-5">
          <div className="flex items-center justify-between mx-12 pt-10">
            <h1 className="w-11/12 text-center text-4xl py-3">
              Privacy policy
            </h1>
            <button
              onClick={privacyClick}
              className="w-1/12 text-center text-xl bg-secondary py-3 rounded-full text-white"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
