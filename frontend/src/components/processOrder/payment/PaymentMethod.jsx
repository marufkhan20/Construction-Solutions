const PaymentMethod = () => {
  return (
    <div className="py-4 px-6 border-b border-[#D1D1D8] flex items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-3">
        <input type="radio" name="" id="" />
        <img
          className="w-6 h-4"
          src="/images/payment-methods/visa.png"
          alt="payment method"
        />
        <h4 className="text-base font-semibold">•••• 6754</h4>
        <span className="block ml-7 text-[#A2A3B1]">Expires 06/2021</span>
      </div>
      <button className="font-semibold text-[#E14B4B]">Remove</button>
    </div>
  );
};

export default PaymentMethod;
