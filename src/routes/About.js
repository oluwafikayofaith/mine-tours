import Nav from "../components/Nav";
import Main from "../components/Main";
import Abtimg from "../assets/img3.jpg";
import Footer from "../components/Footer";
import Abt from "../components/Abt";
function About() {
  return (
    <>
      <Nav />
      <Main
        cname="main-abt"
        heroimg={Abtimg}
        title="Learn More About Us"
        url="/about"
        btn="hide"
      />
      <Abt />
      <Footer />
    </>
  );
}
export default About;
