const OrderSidebar = ({ orderButton }) => {
  return (
    <div className="border border-[#D1D1D8] rounded-sm p-8">
      <h2 className="text-2xl font-bold leading-[32px] mb-8">Order Summary</h2>
      <div className="pb-8 border-b border-[#A2A3B1]">
        <ul className="flex flex-col gap-6">
          <li className="w-full flex items-center justify-between gap-5">
            <span>Price</span>
            <span>$319.98</span>
          </li>
          <li className="w-full flex items-center justify-between gap-5">
            <span>Discount</span>
            <span>$31.9</span>
          </li>
          <li className="w-full flex items-center justify-between gap-5">
            <span>Shipping</span>
            <span className="text-primary">Free</span>
          </li>
          <li className="w-full flex items-center justify-between gap-5">
            <span>Coupon Applied</span>
            <span>$0.00</span>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col gap-6">
          <li className="w-full flex items-center justify-between gap-5">
            <span>TOTAL</span>
            <span className="font-semibold">$288.08</span>
          </li>
          <li className="w-full flex items-center justify-between gap-5">
            <span>Estimated Delivery by</span>
            <span className="font-semibold">01 Feb, 2023</span>
          </li>
        </ul>
        <div className="flex items-center justify-between border border-[#A2A3B1] rounded-sm mt-6 p-4 gap-4">
          <input
            type="text"
            className="w-full outline-none bg-transparent text-[#A2A3B1] placeholder:text-[#A2A3B1]"
            placeholder="Coupon Code"
          />
          <img
            src="/images/icons/coupon.svg"
            className="cursor-pointer"
            alt="icon"
          />
        </div>
        <div className="mt-6">{orderButton}</div>
      </div>
    </div>
  );
};

export default OrderSidebar;
