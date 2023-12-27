import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <h3 className="text-[32px] font-bold">Cart</h3>
        <span className="text-xl text-[#A2A3B1] font-semibold">2 ITEMS</span>
      </div>
      <div className="mt-[60px] flex flex-col flex-wrap gap-8">
        <CartItem />
        <CartItem />
      </div>
      <div className="flex">
        <div className="mt-8 flex items-center gap-3 p-5 border border-primary rounded bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 5L5 19"
              stroke="#3AA39F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z"
              stroke="#3AA39F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z"
              stroke="#3AA39F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>
            10% Instant Discount with Federal Bank Debit Cards on a min spend of
            $150. TCA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
