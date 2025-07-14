import React from "react";

function IphoneCard({ phoneName, imgName, price }) {
  return (
    <div className="telfon-1">
      <h3>{phoneName}</h3>
      <img src={imgName} alt="" />
      <p>STARTING AT ${price}</p>
      <button>VIEW</button>
    </div>
  );
}

export default IphoneCard;
