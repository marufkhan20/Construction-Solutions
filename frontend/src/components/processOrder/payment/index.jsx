import PaymentMethod from "./PaymentMethod";

const Payment = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Payment Method</h3>
      <div className="border border-[#D1D1D8] mt-6 rounded">
        <PaymentMethod />
        <PaymentMethod />
      </div>
      <div className="pt-8 border-t mt-8 border-[#D1D1D8]">
        <button className="flex items-center gap-4 text-primary font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 5V19"
              stroke="#3AA39F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="#3AA39F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Add Payment method</span>
        </button>
      </div>
    </div>
  );
};

export default Payment;
