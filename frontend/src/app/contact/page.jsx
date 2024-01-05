import BreadCumb from "@/components/shared/BreadCumb";
import ContactForm from "@/components/shared/ContactForm";
import Footer from "@/components/shared/Footer";
import Map from "@/components/shared/Map";

const ContactPage = () => {
  return (
    <main>
      <BreadCumb title="contact us" />
      <ContactForm />
      <Map />
      <Footer />
    </main>
  );
};

export default ContactPage;
