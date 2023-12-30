import { cn } from "@/lib/utills";

const Heading = ({
  title = "",
  subTitle = "",
  description = "",
  className = "",
}) => {
  return (
    <div className="text-center">
      <h2 className="text-[40px] sm:text-[55px] md:text-[67px] leading-[50px] sm:leading-[60px] md:leading-[72px] text-black font-montserrat">
        {title}
      </h2>
      <h2 className="text-[40px] sm:text-[55px] md:text-[67px] leading-[50px] sm:leading-[60px] md:leading-[72px] text-grey font-montserrat">
        {subTitle}
      </h2>
      <p
        className={cn(
          "sm:w-[90%] md:w-[70%] xl:w-[50%] mx-auto font-medium text-paragraph leading-[24px] mt-6 font-plus-jakarta-sans",
          className
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default Heading;
