import Companies from "@/components/home/Companies";
import Experience from "@/components/home/Experience";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Products from "@/components/home/products";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Services />
      <Experience />
      <Works />
      <Testimonials />
      <Products />
      <Footer />
    </main>
  );
}
