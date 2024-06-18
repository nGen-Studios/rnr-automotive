import HeroSection from "@/components/Hero-section/hero-section";
import Introduction from "@/components/Introduction/introduction";
import ServiceSection from "@/components/Service-section/service-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Introduction />
      <ServiceSection />
    </main>
  );
}
