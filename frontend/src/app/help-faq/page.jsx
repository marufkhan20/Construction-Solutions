import BreadCumb from "@/components/shared/BreadCumb";
import Footer from "@/components/shared/Footer";
import Button from "@/components/ui/Button";

const HelpFaqPage = () => {
  return (
    <main>
      <BreadCumb title="Help & faq" />
      <div className="container px-5 sm:px-0 mt-12 mb-6 text-center">
        <h2 className="font-bold text-[30px] sm:text-[35px] md:text-[48px] mb-3 text-primary">
          Ask us anything
        </h2>
        <p className="text-2xl">
          Have any questions? {`We're`} here to assist you
        </p>
        <div className="mt-6 w-full sm:w-[550px] mx-auto px-6 py-3 search-box flex items-center gap-[10px]">
          <img src="/images/icons/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Search (Ctrl+/)"
            className="outline-none text-[#4B465C] text-[15px] text-center w-full"
          />
        </div>
      </div>

      <div className="bg-[#565D674D]/30 py-12 mb-12">
        <div className="container px-5 sm:px-0">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/mail.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                How do I change my account email?
              </h3>
              <p className="text-sm">
                You can log in to your account and change it from your Profile{" "}
                {`>`}
                Edit Profile. Then go to the general tab to change your email.
              </p>
            </div>
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/credit-card.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                What should I do if my payment fails?
              </h3>
              <p className="text-sm">
                If your payment fails, you can use the (COD) payment option, if
                available on that order. If your payment is debited from your
                account after a payment failure, it will be credited back within
                7-10 days.
              </p>
            </div>
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/slash.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                What is your cancellation policy?
              </h3>
              <p className="text-sm">
                You can now cancel an order when it is in packed/shipped status.
                Any amount paid will be credited into the same payment mode
                using which the payment was made
              </p>
            </div>
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/truck.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                How do I check order delivery status ?
              </h3>
              <p className="text-sm">
                Please tap on “My Orders” section under main menu of
                App/Website/M-site to check your order status.
              </p>
            </div>
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/dollar-sign.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                What is Instant Refunds?
              </h3>
              <p className="text-sm">
                Upon successful pickup of the return product at your doorstep,
                Myntra will instantly initiate the refund to your source account
                or chosen method of refund. Instant Refunds is not available in
                a few select pin codes and for all self ship returns.
              </p>
            </div>
            <div>
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <img src="/images/icons/help-faq/tag.svg" alt="icon" />
              </div>
              <h3 className="mt-3 text-base mb-2 font-medium leading-[22px]">
                How do I apply a coupon on my order?
              </h3>
              <p className="text-sm">
                You can apply a coupon on cart page before order placement. The
                complete list of your unused and valid coupons will be available
                under “My Coupons” tab of App/Website/M-site.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="p-6 bg-white rounded-xl flex items-center justify-between gap-5 sm:gap-10 flex-wrap">
              <div>
                <h3 className="text-[15px] text-primary font-semibold">
                  Still have questions?
                </h3>
                <p className="text-sm text-primary mt-2">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <Button className="rounded-md">Get in touch</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HelpFaqPage;
