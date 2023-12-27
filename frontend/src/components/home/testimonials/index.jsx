import Heading from "@/components/shared/Heading";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section
      className="secondary bg-primary-light font-montserrat"
      id="testimonials"
    >
      <div className="container">
        <Heading
          title="Listen to what our"
          subTitle="Customers Say"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        />

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
