import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MiNe~ToUrs</h1>
          <p>Going on a Thrilling Ride</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Trips</h4>
          <a href="/">Tours</a>
          <a href="/">Travels</a>
          <a href="/">Tourish</a>
          <a href="/">Trips</a>
        </div>
        <div>
          <h4>Society</h4>
          <a href="/">Adventure</a>
          <a href="/">People</a>
          <a href="/">Places</a>
          <a href="/">Culture</a>
        </div>
        <div>
          <h4>Trips</h4>
          <a href="/">Tours</a>
          <a href="/">Travels</a>
          <a href="/">Tourish</a>
          <a href="/">Trips</a>
        </div>
        <div>
          <h4>Projects</h4>
          <a href="/">Food</a>
          <a href="/">Communities</a>
          <a href="/">Countries</a>
          <a href="/">Connections</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
