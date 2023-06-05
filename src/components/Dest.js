import mount1 from "../assets/img6.jpg";
import mount2 from "../assets/img5.jpg";
import mount3 from "../assets/img1.jpg";
import mount4 from "../assets/img3.jpg";
import DestData from "./DestData";
import "./DestStyles.css";
const Dest = () => {
  return (
    <div className="dest">
      <h1>Our Top Destinations</h1>
      <p>Relaxing Getaways and Retreats</p>

      <DestData
        headings="Adventures and Attractions"
        text="When it comes to adventures, there are so many possibilities. For
      some people, adventure means going on a thrilling roller coaster
      ride, while for others, it might mean trekking through the
      wilderness or exploring a new city. Whatever your personal
      definition of adventure is, there are plenty of ways to seek it out.
      One popular way to have an adventure is by going on a hike. Whether
      it's a leisurely stroll through a nearby park or a strenuous climb
      up a mountain, hiking can be an excellent way to explore the great
      outdoors and challenge yourself physically. Along the way, you might
      encounter beautiful vistas, hidden waterfalls, and all sorts of
      wildlife. Another adventurous activity that has gained popularity in
      recent years is ziplining."
        im1={mount1}
        im2={mount2}
      />

      <DestData
        headings="Travels and Tours"
        im1={mount3}
        im2={mount4}
        text="One of the best things 
        about trips and tours is the opportunity to step outside of our comfort zones. When we visit new places, we encounter unfamiliar customs, foods, and languages. We're challenged by the unexpected and forced to adapt to unfamiliar environments. This can be scary, but it's also incredibly empowering. When we successfully navigate a new city or country, we gain confidence in ourselves and our abilities.
        Another great thing about trips and tours is the chance to connect with other people. Whether we're traveling with friends, family, or strangers, the shared experience of exploring new places creates a bond that's hard to replicate elsewhere. We laugh together, share meals, and create memories that will last a lifetime. And when we encounter other travelers or locals, we're reminded of the inherent goodness in people and the beauty of human connection.."
      />
    </div>
  );
};
export default Dest;
