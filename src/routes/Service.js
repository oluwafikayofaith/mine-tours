import Nav from "../components/Nav";
import Main from "../components/Main";
import Simg from "../assets/img4.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Nav />
      <Main
        cname="main-abt"
        heroimg={Simg}
        title="Our Services"
        text="Adventures and Attractions"
        url="/service"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
