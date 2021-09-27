import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="head">About Us</h1>
          <p className="abouttext">
            Inspired by CryptoPunks, Csgo skins, and pokemon cards comes
            PolyApes. As some one who was drawn to NFTs due to a love of
            collectables the high gas fees pushed me away. Buying a NFT under
            100 dollars didn't make sense to me due to 50+ dollar fees. My
            investment would have to double for me to break even. This is why I
            founded PolyApes. With extremly low transaction fees we incourage
            buying, selling, and trading for other apes. Thank you for
            checking our project out. Learn more in the docs below.
          </p>
          <a className='span' href='https://www.gitbook.com/'>
          <i class="docs fas fa-book"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
