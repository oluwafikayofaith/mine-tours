import TripData from "./TripData";
import "./TripStyles.css";
import trip1 from "../assets/img6.jpg";
import trip2 from "../assets/img1.jpg";
import trip3 from "../assets/img4.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Trips</h1>
      <p>Discover new places with us today!</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip to Canada"
          text="Traveling is one of the most exciting and enriching experiences a person can have. It broadens our horizons, exposes us to new cultures and ways of life, and creates memories that last a lifetime. Whether it's a weekend road trip or a mobackpacking adventure, every trip and tour has the potential to be an incredible adventure."
        />
        <TripData
          image={trip2}
          heading="Trip to Ireland"
          text="We're challenged by the unexpected and forced to adapt to unfamiliar environments. This can be scary, but it's also incredibly empowering. When we successfully navigate a new city or country, we gain confidence in ourselves and our abilities."
        />
        <TripData
          image={trip3}
          heading="Trip to Durbar"
          text="First and foremost, trips and tours offer a break from the monotonous routine of day-to-day life. It is essential to take a break from our daily lives to refresh the mind and body. Traveling allows us to disconnect from our everyday lives, and this disconnection can help us gain a new perspective and appreciation for our daily routines."
        />
      </div>
    </div>
  );
}
export default Trip;
