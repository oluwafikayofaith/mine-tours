import { Component } from "react";
import "./Navstyles.css";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navitems">
        <h1 className="navlogo">MiNe~ToUrs</h1>
        <div className="menuicons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "navmenu active" : "navmenu"}>
          {Menu.map((items, index) => {
            return (
              <li key={index}>
                <i className={items.icon}></i>
                <Link className={items.cname} to={items.url}>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>Sign-Up</button>
        </ul>
      </nav>
    );
  }
}
export default Nav;
