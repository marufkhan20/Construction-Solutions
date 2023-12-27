import ShippingMethod from "./ShippingMethod";

const Shipping = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Payment Method</h3>
      <div className="border border-[#D1D1D8] mt-6 rounded">
        <ShippingMethod />
        <ShippingMethod />
        <ShippingMethod />
      </div>
    </div>
  );
};

export default Shipping;
