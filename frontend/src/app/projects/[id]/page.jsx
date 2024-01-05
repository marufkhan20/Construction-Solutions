import BreadCumb from "@/components/shared/BreadCumb";
import Footer from "@/components/shared/Footer";

const Project = () => {
  return (
    <main>
      <BreadCumb title="Project Name" />

      <div className="p-6 container flex flex-col md:flex-row gap-8">
        <div className="w-full flex flex-col gap-6">
          <img
            src="/images/projects/1.jpeg"
            className="w-full rounded-[20px]"
            alt="project"
          />
          <div className="flex w-full gap-6">
            <img
              src="/images/projects/2.jpeg"
              className="w-[48.5%] rounded-[20px]"
              alt="project"
            />
            <img
              src="/images/projects/3.jpeg"
              className="w-[48.5%] rounded-[20px]"
              alt="project"
            />
          </div>
          <img
            src="/images/projects/4.jpeg"
            className="w-full rounded-[20px]"
            alt="project"
          />
        </div>
        <div className="w-full">
          <div>
            <div>
              <h2 className="mb-3 text-xl">BRIEF DESCRIPTION</h2>
              <div className="w-[100px] h-[2px] bg-primary" />
              <p className="mt-6 text-lg">
                Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                accumsan est in tempus etos ullamcorper, sem quam suscipit lacus
                maecenas tortor. Erates vitae node metus. Suspendisse gravida
                ornare non mattis velit rutrum modest. Morbi suspendisse a
                tortor velim pellentesque uter justo magna gravida.
              </p>
            </div>
            <div className="mt-12">
              <h2 className="my-3 text-xl">AT A GLANCE</h2>
              <div className="w-[100px] h-[2px] bg-primary" />
              <div className="mt-6">
                <div className="bg-[#EEEEEE] flex items-center justify-between">
                  <div className="border-right py-4 px-[10px] w-full text-right">
                    <span>Project Type</span>
                  </div>
                  <div className="py-4 px-[10px] w-full">
                    <span>Office Building</span>
                  </div>
                </div>
                <div className="bg-white flex items-center justify-between">
                  <div className="border-right py-4 px-[10px] w-full text-right">
                    <span>Client</span>
                  </div>
                  <div className="py-4 px-[10px] w-full">
                    <span>New York City</span>
                  </div>
                </div>
                <div className="bg-[#EEEEEE] flex items-center justify-between">
                  <div className="border-right py-4 px-[10px] w-full text-right">
                    <span>Completion Date</span>
                  </div>
                  <div className="py-4 px-[10px] w-full">
                    <span>August 2008</span>
                  </div>
                </div>
                <div className="bg-white flex items-center justify-between">
                  <div className="border-right py-4 px-[10px] w-full text-right">
                    <span>Project Size</span>
                  </div>
                  <div className="py-4 px-[10px] w-full">
                    <span>3350 Square Feet</span>
                  </div>
                </div>
                <div className="bg-[#EEEEEE] flex items-center justify-between">
                  <div className="border-right py-4 px-[10px] w-full text-right">
                    <span>Contract Value</span>
                  </div>
                  <div className="py-4 px-[10px] w-full">
                    <span>$10,250,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pb-10">
              <div>
                <h2 className="my-3 text-xl">SCOPE OF WORK</h2>
                <div className="w-[100px] h-[2px] bg-primary" />

                <div className="mt-9">
                  <p className="text-sm">
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
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
                        <span className="text-primary font-bold">
                          Cost Control
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Project;
