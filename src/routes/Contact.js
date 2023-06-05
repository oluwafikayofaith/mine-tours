import Nav from "../components/Nav";
import Main from "../components/Main";
import Cimg from "../assets/img2.jpg";
import Footer from "../components/Footer";
import FormUs from "../components/Form";

function Contact() {
  return (
    <>
      <Nav />
      <Main
        cname="main-abt"
        heroimg={Cimg}
        title="Discover Exotic Locations"
        text="Contact Us Today!"
        url="/contact"
      />
      <FormUs />

      <Footer />
    </>
  );
}
export default Contact;
