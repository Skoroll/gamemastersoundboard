import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

function Banner({ image, altText = "Banner Image", location, flavorText }) {
  return (
    <div
      className="banner">
        <div className="banner__img">
          <img src={image} alt="" />
        </div>
    
    
      <div className="banner__content">
        {location && <p className="banner__location">{location}</p>}
        {flavorText && <p className="banner__flavor">{flavorText}</p>}
      </div>
    </div>
  );
}



export default Banner;
