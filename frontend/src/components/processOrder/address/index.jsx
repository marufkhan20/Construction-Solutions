import AddressItem from "./AddressItem";

const Address = () => {
  return (
    <div>
      <div className="flex flex-col gap-[54px] pb-8 border-b border-[#D1D1D8]">
        <AddressItem />
        <AddressItem />
      </div>
      <div className="mt-8 mx-9">
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
          <span>Add New Address</span>
        </button>
      </div>
    </div>
  );
};

export default Address;
