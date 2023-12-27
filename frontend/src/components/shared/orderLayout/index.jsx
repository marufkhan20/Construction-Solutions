import OrderSidebar from "./OrderSidebar";

const OrderLayout = ({ orderButton, children }) => {
  return (
    <main className="px-5 py-[72px] bg-white text-[#17183B]">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        <div className="order-details">{children}</div>
        <div className="w-full md:w-[380px]">
          <OrderSidebar orderButton={orderButton} />
        </div>
      </div>
    </main>
  );
};

export default OrderLayout;
