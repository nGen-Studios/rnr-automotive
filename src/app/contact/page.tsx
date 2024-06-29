"use client";

import { useState } from "react";

import SendMessage from "@/components/ContactPage/sendMessage";
import OurDetail from "@/components/ContactPage/ourDetail";
import GoogleMaps from "@/components/ContactPage/googleMaps";
import Terms from "@/components/ContactPage/terms";

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
      {!showTermsPage && !showPrivacyPage && (
        <>
          <h2 className="mt-32 text-center text-xl mb-2 mobile:px-10 mobile:py-5 mobile:mt-20 mobile:mb-2">
            To schedule your car for a service, simply send us an email or give
            us a call!
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
        </>
      )}
      <Terms
        showTerms={showTermsPage}
        termsClick={toggleTerms}
        showPrivacy={showPrivacyPage}
        privacyClick={togglePrivacy}
      />
    </section>
  );
}
