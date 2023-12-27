const BreadCumb = ({ title = "" }) => {
  return (
    <div
      className="h-[200px] px-6 py-12 flex items-center justify-center w-full"
      style={{
        backgroundImage: `url(/images/breadcumb.jpeg)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="uppercase text-white text-2xl">{title}</h2>
    </div>
  );
};

export default BreadCumb;
