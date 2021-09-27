import React, { Component } from "react";
import "./Front.css";
import polyape0 from "../../images/polyape0.png";
import polyape1 from "../../images/polyape1.png";
import polyape2 from "../../images/polyape2.png";
import polyape3 from "../../images/polyape3.png";
import polyape4 from "../../images/polyape4.png";
import polyape5 from "../../images/polyape5.png";

class Front extends Component {
  render() {
    return (
      <div className="body">
        <div className="row1">
          <h1 className="title">PolyApes</h1>
          <img className="img1" src={polyape0} alt=""></img>
          <img className="img2" src={polyape1} alt=""></img>
          <img className="img2" src={polyape4} alt=""></img>
        </div>
        <div className="row2">
          <p className="intro">
            PolyApes are an all new NFT built on the polygon network with an
            emphasis on trading. One of the main issues with NFTs are the insane
            gas fees for minting or buying. The Polygon network provides a
            soultion for this by greatly decreasing these fees allowing for easy
            trading. Mint one today!
          </p>
          <img className="img3" src={polyape2} alt=""></img>
          <img className="img2" src={polyape3} alt=""></img>
          <img className="img2" src={polyape5} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Front;
