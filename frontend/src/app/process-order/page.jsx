"use client";
import Address from "@/components/processOrder/address";
import Payment from "@/components/processOrder/payment";
import Shipping from "@/components/processOrder/shipping";
import OrderLayout from "@/components/shared/orderLayout";
import Button from "@/components/ui/Button";
import { useState } from "react";

const tabs = {
  1: Address,
  2: Shipping,
  3: Payment,
};

const ProcessOrderPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const Tab = tabs[activeTab];
  return (
    <OrderLayout
      orderButton={
        <Button
          className="w-full rounded"
          onClick={() => {
            activeTab !== 3 && setActiveTab(activeTab + 1);
          }}
        >
          {activeTab === 1 && "Continue to Shipping"}
          {activeTab === 2 && "Continue to Payment"}
          {activeTab === 3 && "Place Your Order and Pay"}
        </Button>
      }
    >
      <div className="flex items-center flex-wrap gap-5 sm:gap-10 mb-[64px]">
        <h3
          className={`text-[24px] ${
            activeTab === 1 ? "text-[#17183B]" : "text-[#A2A3B1]"
          }`}
        >
          Address
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#A2A3B1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3
          className={`text-[24px] ${
            activeTab === 2 ? "text-[#17183B]" : "text-[#A2A3B1]"
          }`}
        >
          Shipping
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#A2A3B1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3
          className={`text-[24px] ${
            activeTab === 3 ? "text-[#17183B]" : "text-[#A2A3B1]"
          }`}
        >
          Payment
        </h3>
      </div>
      <Tab />
    </OrderLayout>
  );
};

export default ProcessOrderPage;
