import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and selling of products or services over
          the internet serves as virtual marketplace where businesses and individual showcase their products, interact
          with customer, and conduct transactions without the need of physical presence. E-commerce website have gained
          immense popularity due to their convenient accessbility, and the global reach they offer.
          <p>
            E-commerce website typically display product or services a detailed description, images, prices, and any
            available variation (e.g, sizes, colors). Each product usually has its own dedication with relevant
            information.
          </p>
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
