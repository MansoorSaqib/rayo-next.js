// import Demos from "@/components/preview/Demos";

// import BlogPages from "@/components/preview/BlogPages";
// import Features from "@/components/preview/Features";
// import MarqueeSection2 from "@/components/preview/MarqueeSection2";
// import InnerPagesSlider from "@/components/preview/InnerPagesSlider";
// import PagesMarquee from "@/components/preview/PagesMarquee";
// import Features2 from "@/components/preview/Features2";
// import FeatureCards from "@/components/preview/FeatureCards";
// import Cta from "@/components/preview/Cta";
// import Footer1 from "@/components/footers/Footer1";
import { Metadata } from "next";
import AboutUs from "./boot-components/AboutUs";
import Footer from "./boot-components/Footer";
import HeroSection from "./boot-components/HeroSection";
import MarqueeSection from "./boot-components/MarqueeSection";
import TextureFamiliesSection from "./boot-components/TextureFamiliesSection";
import GallerySection from "./boot-components/GallerySection";
// import ServicesStack from "@/components/homes/home-1/ServicesStack";
import FeaturesSection from "./boot-components/FeaturesSection";
import LorePreview from "./boot-components/LorePreviewSection";
import ConnectSection from "./boot-components/ConnectSection";
import OurPurpose from "./boot-components/OurPurpose";
import FoundersMessage from "./boot-components/FoundersMessage";
import Hero from "@/components/homes/home-digital-agency/Hero";
export const metadata: Metadata = {
  title: "Digital Knights",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function DigitalKnights() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutUs />
        {/* Slider */}
        <MarqueeSection
          items={[
            "Resilience",
            "Design Culture",
            "World Building",
            "Armor Styles",
            "Evolving Visuals",
          ]}
        />
        {/* Texture & Color Families */}
        <TextureFamiliesSection />
        {/* Features & Values */}
        <FeaturesSection />
        {/* Slider */}
        <MarqueeSection
          direction="left"
          items={["Innovation", "Culture", "Growth", "Uniqueness", "Ideas"]}
        />
        {/* Gallery */}
        <GallerySection />
        {/* Lore */}
        <LorePreview />
        {/* Purpose */}
        <OurPurpose />
        {/* Founder's Message */}
        <FoundersMessage />

        {/* Follow Us */}
        <ConnectSection />

        {/* <InnerPagesSlider /> */}
        {/* <FeatureCards /> */}
        {/* <Features2 /> */}

        {/* <BlogPages /> */}
        {/* <Features /> */}
        {/* <Cta /> */}
        {/* <Demos /> */}
      </main>
      <Footer />
    </>
  );
}
