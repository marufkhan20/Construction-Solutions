import Button from "../ui/Button";

const ContactForm = () => {
  return (
    <div className="py-[72px]">
      <div className="container px-5 sm:px-0 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full">
          <h2 className="text-primary text-[43px] leading-[61px]">
            Have Questions? <br className="hidden sm:block" />
            Get in Touch!
          </h2>
          <p className="text-base mt-4">
            Adipiscing elit, sed do eiusmod tempor incididunt ut{" "}
            <br className="hidden sm:block" /> labore et dolore magna aliqua. Ut
            enim ad minim.
          </p>
          <div className="flex flex-col gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <img src="/images/icons/contact-1.svg" alt="contact" />
              </div>
              <span>ed do eiusmod tempor incididunt ut Ut enim ad</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <img src="/images/icons/contact-2.svg" alt="contact" />
              </div>
              <span>email@websitename.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <img src="/images/icons/contact-3.svg" alt="contact" />
              </div>
              <span>+9X XX XXX XXXXXXX</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form action="" className="flex flex-col gap-[34px]">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex items-center gap-[14px] py-[14px] px-5 border border-primary w-full">
                <img src="/images/icons/user.svg" alt="user" />
                <input
                  type="text"
                  className="text-[#525252] placeholder:text-[#525252] text-base outline-none w-full"
                  placeholder="Name"
                />
              </div>
              <div className="flex items-center gap-[14px] py-[14px] px-5 border border-primary w-full">
                <img src="/images/icons/email.svg" alt="user" />
                <input
                  type="email"
                  className="text-[#525252] placeholder:text-[#525252] text-base outline-none w-full"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex items-center gap-[14px] py-[14px] px-5 border border-primary w-full">
                <img src="/images/icons/phone.svg" alt="user" />
                <input
                  type="number"
                  className="text-[#525252] placeholder:text-[#525252] text-base outline-none w-full"
                  placeholder="Phone"
                />
              </div>
              <div className="flex items-center gap-[14px] py-[14px] px-5 border border-primary w-full">
                <input
                  type="text"
                  className="text-[#525252] placeholder:text-[#525252] text-base outline-none w-full"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="flex items-start gap-[14px] py-[14px] px-5 border border-primary">
              <img
                src="/images/icons/message.svg"
                className="mt-1"
                alt="user"
              />
              <textarea
                className="text-[#525252] placeholder:text-[#525252] text-base outline-none w-full h-[150px]"
                placeholder="How can we help you ? Feel free to get in touch!"
              />
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" id="agree" className="border-[#D0D5DD]" />
              <label htmlFor="agree" className="cursor-pointer">
                I agree that my data is collected and stored
              </label>
            </div>
            <div>
              <Button className="rounded-[10px]" type="submit">
                🤙 Get In Touch
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
