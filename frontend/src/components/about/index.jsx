import ContactForm from "../shared/ContactForm";
import Experience from "../shared/Experience";
import Footer from "../shared/Footer";
import Map from "../shared/Map";
import Button from "../ui/Button";

const About = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between gap-10 px-5 sm:px-0 container mt-5 items-center">
        <div className="w-full md:w-[50%]">
          <h2 className="font-bold text-[30px] sm:text-[35px] md:text-[48px] md:leading-[70px] mb-5 text-primary">
            About Our Construction Company
          </h2>
          <p className="text-[22px] leading-[32px] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            egestas pellentesque libero dolor in diam consequat ut.{" "}
          </p>
          <Button className="uppercase">get quote</Button>
        </div>
        <div className="w-full md:w-[30%]">
          <h2 className="text-[32px] leading-[50px] text-primary">
            What We Do
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="62"
                  viewBox="0 0 60 62"
                  fill="none"
                >
                  <path
                    d="M24.0039 60.25H1.85742V1.75H30.2717V60.25H58.2681V15.9571H35.7039"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M1.85742 15.1211H19.8253"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M1.85742 25.1504H19.8253"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.2715 25.1504H48.2393"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M1.85742 35.1786H19.8253"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.2715 35.1786H48.2393"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M1.85742 45.2072H19.8253"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.2715 45.2072H48.2393"
                    stroke="#565D67"
                    stroke-width="3.34286"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base">Building Construction</h4>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="65"
                  viewBox="0 0 57 65"
                  fill="none"
                >
                  <path
                    d="M48.191 32.7112V62.75H35.9233V29.2451C22.2921 17.6917 32.0612 7.10113 38.6496 3.25V14.625C38.6496 16.3187 40.0226 17.6917 41.7164 17.6917V17.6917C43.4101 17.6917 44.7832 16.3187 44.7832 14.625V3.25C51.5988 7.48625 62.0948 18.616 49.5541 29.2451"
                    stroke="#565D67"
                    stroke-width="2.55"
                  />
                  <path
                    opacity="0.5"
                    d="M9.50781 32.1502V17.7002"
                    stroke="#565D67"
                    stroke-width="2.55"
                  />
                  <path
                    d="M16.242 34.7H4.47281L1.85742 62.75H18.8574L16.242 34.7Z"
                    stroke="#565D67"
                    stroke-width="2.55"
                  />
                  <path
                    d="M7.28474 17.7002L12.5809 17.7002L13.7578 8.3502L6.10781 8.3502L7.28474 17.7002Z"
                    stroke="#565D67"
                    stroke-width="2.55"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base">Building Repairs</h4>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="72"
                  viewBox="0 0 46 72"
                  fill="none"
                >
                  <path
                    d="M8.62213 29.9119H44.4751V2.17664H1.85742V39.3825H17.4162L14.7104 70.5002H32.2986L28.2398 39.3825H44.4751V35.3237"
                    stroke="#565D67"
                    stroke-width="3"
                  />
                  <path
                    d="M18.7701 2.8527L18.7701 10.2939C18.7701 12.9091 16.65 15.0292 14.0348 15.0292C11.4196 15.0292 9.29952 12.9091 9.29952 10.2939L9.29952 2.8527L18.7701 2.8527Z"
                    stroke="#565D67"
                    stroke-width="2.70588"
                  />
                  <path
                    d="M29.5924 2.8527L29.5924 15.7056C29.5924 18.3209 27.4723 20.4409 24.8571 20.4409C22.2418 20.4409 20.1218 18.3209 20.1218 15.7056L20.1218 2.8527L29.5924 2.8527Z"
                    stroke="#565D67"
                    stroke-width="2.70588"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base">Custom Design</h4>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-5 sm:px-0 flex flex-col-reverse lg:flex-row items-center gap-3 mt-11 mb-6">
        <div className="w-full">
          <p className="text-[#666666] text-[15px] leading-[27px]">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit.
          </p>

          <p className="text-[#666666] text-[15px] leading-[27px] mt-12">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit.
          </p>
        </div>
        <div className="w-full">
          <img src="/images/about-us.png" alt="about us" />
        </div>
      </div>

      <Experience />

      <div className="container px-5 sm:px-0 flex-col-reverse lg:flex-row flex items-center gap-3 my-6">
        <div className="w-full">
          <p className="text-[#666666] text-[15px] leading-[27px]">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit.
          </p>

          <p className="text-[#666666] text-[15px] leading-[27px] mt-12">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit.
          </p>
        </div>
        <div className="w-full">
          <img src="/images/about-us-2.jpeg" alt="about us" />
        </div>
      </div>

      <ContactForm />
      <Map />
      <Footer />
    </main>
  );
};

export default About;
