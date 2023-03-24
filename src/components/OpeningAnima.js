import React, { Fragment } from "react";

import askImage from "../images/A.png";
import godImage from "../images/G.png";

import "./OpeningAnima.css";

class OpeningAnima extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: true,
      });
    }, 1000); // Delay of 1 second
  }

  render() {
    return (
      <div className="animation-container">
        {this.state.animate && (
          <Fragment>
            <div className="ask">
              <img src={askImage} alt="Ask" />
            </div>
            <div className="god">
              <img src={godImage} alt="God" />
            </div>
            <div
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default OpeningAnima;
