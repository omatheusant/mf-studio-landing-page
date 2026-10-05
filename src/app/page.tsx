import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Benefits from "@/components/Benefits";
import Commitment from "@/components/Commitment";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar logo={<Logo variant="icon" />} />
      <main className="flex-1">
        <Hero />
        <About />
        <Differentials />
        <Audience />
        <Services />
        <Methodology />
        <Benefits />
        <Commitment />
        <Highlights />
        <Pricing />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
