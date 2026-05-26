import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OpenStores from "@/components/OpenStores";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Notice from "@/components/Notice";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OpenStores />
        <Benefits />
        <Products />
        <Process />
        <Notice />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingBtn />
    </>
  );
}
