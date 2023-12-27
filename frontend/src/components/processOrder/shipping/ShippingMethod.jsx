const ShippingMethod = () => {
  return (
    <div className="py-4 px-6 border-b border-[#D1D1D8] flex items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-3">
        <input type="radio" name="" id="" />
        <h4 className="text-base font-semibold">Free</h4>
        <span className="block ml-7 text-[#A2A3B1]">Regular Shipment</span>
      </div>
      <h4 className="text-base font-semibold">01 Feb, 2023</h4>
    </div>
  );
};

export default ShippingMethod;
