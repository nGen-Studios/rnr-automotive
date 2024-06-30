import HeroSection from "@/components/Hero-section/hero-section";
import Introduction from "@/components/Introduction/introduction";
import ReviewSection from "@/components/Review-section/review-section";
import ServiceSection from "@/components/Service-section/service-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RNR Automotive",
  description: "Your best friend in verchile servicing",
  keywords:
    "car, truck, service, servicing, repairs, affordable, vaal, deneysville, meyerton, directions",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Introduction />
      <ServiceSection />
      <ReviewSection />
    </main>
  );
}
