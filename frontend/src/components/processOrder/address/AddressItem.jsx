const AddressItem = () => {
  return (
    <div className="flex justify-between gap-5 flex-wrap">
      <div className="flex items-start gap-3">
        <input className="w-6 h-6" type="radio" />
        <div>
          <div className="flex items-center gap-[14px]">
            <h3 className="text-2xl leading-[24px] font-semibold">
              Huzefa Bagwala
            </h3>
            <span className="uppercase border border-primary rounded text-primary py-[5px] px-2 text-xs font-semibold">
              HOME
            </span>
          </div>
          <span className="mt-4 block">
            1131 Dusty Townline, Jacksonville, TX 40322
          </span>
          <div className="mt-2 flex items-center gap-3">
            <span className="font-semibold">Contact - </span>
            <span>(936) 361-0310</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="font-semibold transition-all hover:text-primary">
          Edit
        </button>
        <div className="w-[1px] h-5 bg-[#D1D1D8]" />
        <button className="font-semibold text-[#E14B4B]">Delete</button>
      </div>
    </div>
  );
};

export default AddressItem;
