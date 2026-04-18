import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductSection />
      <Gallery />
      <Reviews />
      <BuySection />
      <Footer />
    </main>
  );
}
