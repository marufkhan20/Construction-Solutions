import Companies from "@/components/home/Companies";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Products from "@/components/home/products";
import Experience from "@/components/shared/Experience";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Products />
      <Services />
      <Experience />
      <Works />
      <Footer />
    </main>
  );
}
