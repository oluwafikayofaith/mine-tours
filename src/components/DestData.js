import { Component } from "react";
import "./DestStyles.css";
class DestData extends Component {
  render() {
    return (
      <div className="firstdes">
        <div className="dest-text">
          <h2>{this.props.headings}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="im" src={this.props.im1} />
          <img alt="im2" src={this.props.im2} />
        </div>
      </div>
    );
  }
}
export default DestData;
