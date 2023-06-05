import Dest from "../components/Dest";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Nav />
      <Main
        cname="main"
        heroimg="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        title="Explore the World with Us"
        text="Trip Planning Made Easy"
        btntext="Luxury Escape"
        url="/"
        btn="show"
      />
      <Dest />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
