"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";

import SendMessage from "@/components/ContactPage/sendMessage";
import OurDetail from "@/components/ContactPage/ourDetail";
import GoogleMaps from "@/components/ContactPage/googleMaps";

export const metadata: Metadata = {
  title: "RNR Automotive Contact Info",
  description: "Contact us today for a quote",
  keywords:
    "car, truck, service, servicing, repairs, affordable, vaal, deneysville, meyerton, directions",
};

export default function ContactPage() {
  const [showTermsPage, setShowTermsPage] = useState(false);
  const [showPrivacyPage, setShowPrivacyPage] = useState(false);

  function toggleTerms() {
    setShowTermsPage(!showTermsPage);
  }

  function togglePrivacy() {
    setShowPrivacyPage(!showPrivacyPage);
  }

  return (
    <section className="w-full h-auto max-w-[1250px] m-auto laptop:max-w-[1100px] tablet:max-w-[900px]">
      <h2 className="mt-32 text-center text-xl mb-2 mobile:px-10 mobile:py-5 mobile:mt-20 mobile:mb-2">
        To schedule your car for a service, simply send us an email or give us a
        call!
      </h2>
      <p className="mb-10 text-base underline decoration-secondary font-semibold text-center font-sans">
        RnR Automotive serves the right of admission to any service or task
        renderd
      </p>
      <div className="flex items-center justify-evenly mb-12 tablet:flex-col">
        <SendMessage />
        <OurDetail />
      </div>
      <GoogleMaps />
      <div className="text-center underline mb-5">
        <div className="w-52 mb-2 m-auto hover:scale-110">
          <Link href="/terms-and-conditions">Terms and conditions</Link>
        </div>

        <div className="w-32 m-auto hover:scale-110">
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </section>
  );
}
