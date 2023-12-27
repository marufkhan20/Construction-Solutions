"use client";
import ServiceDetails from "@/components/services/ServiceDetails";
import Sidebar from "@/components/services/sidebar";
import BreadCumb from "@/components/shared/BreadCumb";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const ServicesPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <main className="font-dm-sans">
      <BreadCumb title="blueprints" />

      <div className="p-6 pb-0 block md:hidden">
        {openSidebar ? (
          <CgClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        ) : (
          <FaBars
            onClick={() => setOpenSidebar(true)}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>

      <div className="p-6 container flex gap-8">
        <Sidebar openSidebar={openSidebar} />
        <ServiceDetails />
      </div>
    </main>
  );
};

export default ServicesPage;
