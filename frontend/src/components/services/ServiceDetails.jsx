import { FaChevronRight } from "react-icons/fa6";

const ServiceDetails = () => {
  return (
    <div className="service-details">
      <div className="grid lg:grid-cols-2 gap-3">
        <img src="/images/services/1.jpeg" className="w-full" alt="service" />
        <img src="/images/services/2.jpeg" className="w-full" alt="service" />
      </div>
      <div className="mt-12">
        <h2 className="my-3 text-2xl">SERVICE OVERVIEW</h2>
        <div className="w-[100px] h-[2px] bg-primary" />
        <p className="mt-6 text-lg">
          When it comes to choosing a renovator to transform the interior of
          your home, quality and trust should never be compromised. Working with
          a professional is an absolute must. With over 15 years experience and
          a real focus on customer satisfaction, you can rely on us for your
          next renovation, driveway sett on home repair. Our installations are
          carried out by fully trained staff to the highest professional
          standards. Always on time and on budget.
        </p>
        <br />
        <p className="text-lg">
          Renovate has proven results for setting exceptional standards in cost
          control, planning, scheduling and project safety. We have experience
          that gives us a competitive advantage over others in our field.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="my-3 text-2xl">PLAN AND DETAILS</h2>
        <div className="w-[100px] h-[2px] bg-primary" />
        <div className="mt-6">
          <div className="bg-[#EEEEEE] flex items-center justify-between">
            <div className="border-right py-4 px-[10px] w-full text-right">
              <span>Prepare Home Remodeling Ideas</span>
            </div>
            <div className="py-4 px-[10px] w-full">
              <span>$600 - $1150</span>
            </div>
          </div>
          <div className="bg-white flex items-center justify-between">
            <div className="border-right py-4 px-[10px] w-full text-right">
              <span>Specify Materials</span>
            </div>
            <div className="py-4 px-[10px] w-full">
              <span>$250 - $350</span>
            </div>
          </div>
          <div className="bg-[#EEEEEE] flex items-center justify-between">
            <div className="border-right py-4 px-[10px] w-full text-right">
              <span>Paints Room</span>
            </div>
            <div className="py-4 px-[10px] w-full">
              <span>$2.50 - $3.50 Per Square Feet</span>
            </div>
          </div>
          <div className="bg-white flex items-center justify-between">
            <div className="border-right py-4 px-[10px] w-full text-right">
              <span>Install Interior Door</span>
            </div>
            <div className="py-4 px-[10px] w-full">
              <span>$150 - $350 Per Door</span>
            </div>
          </div>
          <div className="bg-[#EEEEEE] flex items-center justify-between">
            <div className="border-right py-4 px-[10px] w-full text-right">
              <span>Install Light Switch</span>
            </div>
            <div className="py-4 px-[10px] w-full">
              <span>$100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pb-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="w-full">
            <h2 className="my-3 text-xl">WHY CHOOSE US</h2>
            <div className="w-[100px] h-[2px] bg-primary" />

            <div className="mt-9">
              <p className="text-sm">
                With over 15 years experience and a real focus on customer
                satisfaction, you can rely on us for your next project. We
                provide a professional renovation and installation services with
                a real focus on customer satisfaction.
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Financial Responsibility to Our Clients
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Superior Quality and Craftsmanship
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Quality and Value to the{" "}
                    <span className="text-primary font-bold">
                      Projects We Deliver
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Highest Standards in{" "}
                    <span className="text-primary font-bold">Cost Control</span>
                  </span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">On Time and on Budget</span>
                </li>
                <li className="flex items-center gap-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91663 7.00004L5.83329 9.91671L11.6666 4.08337"
                      stroke="#3AA39F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="text-sm">
                    Real Focus on Customer Satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            <h2 className="my-3 text-xl">POPULAR QUESTION</h2>
            <div className="w-[100px] h-[2px] bg-primary" />

            <div className="mt-9">
              <div>
                <div className="flex items-center gap-[10px] bg-primary/70 p-[10px]">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    <FaChevronRight />
                  </div>
                  <span className="text-sm text-white">
                    Why does a renovation project cost so much?
                  </span>
                </div>
                <p className="mt-[10px] text-sm leading-[20px]">
                  Morbi nulla tortor, degnissim at node cursus euismod est arcu.
                  Nomad turbina uter vehicula justo magna paetos in accumsan
                  tempus, terminal ullamcorper a quam suscipit.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-[10px] border-b border-black/50 p-[10px]">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    <FaChevronRight />
                  </div>
                  <span className="text-sm text-[#525252]">
                    What is the timeline for the project?
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[10px] border-b border-black/50 p-[10px]">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    <FaChevronRight />
                  </div>
                  <span className="text-sm text-[#525252]">
                    What is the total budget for construction?
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[10px] border-b border-black/50 p-[10px]">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    <FaChevronRight />
                  </div>
                  <span className="text-sm text-[#525252]">
                    How is renovation project initiated?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
