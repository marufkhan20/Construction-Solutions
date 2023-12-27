import Link from "next/link";

const Service = ({ icon, title = "", description = "" }) => {
  return (
    <Link
      href="/services"
      className="py-10 px-5 rounded-2xl service-item transition-all"
    >
      {icon}
      <h3 className="text-[28px] font-semibold leading-[32px]text-black font-montserrat mt-3">
        {title?.split(" ")?.length > 1 ? (
          <>
            {title?.split(" ")[0]}{" "}
            <span className="text-primary">{title?.split(" ")[1]}</span>
          </>
        ) : (
          title
        )}
      </h3>
      <span className="font-medium text-paragraph font-plus-jakarta-sans">
        {description}
      </span>
    </Link>
  );
};

export default Service;
