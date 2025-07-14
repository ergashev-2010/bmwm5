import React from "react";
import IphoneCard from "./Iphone.Card";

function Telfon() {
  return (
    <div className="telfonlar">
      <div className="container">
        <IphoneCard
          phoneName="iphone 11"
          imgName="img/ip-11.png"
          price={999}
        ></IphoneCard>
            <IphoneCard
          phoneName="iphone 11 pro"
          imgName="img/ip-12.png"
          price={1199}
        ></IphoneCard>
            <IphoneCard
          phoneName="iphone se"
          imgName="img/ip-se.png"
          price={899}
        ></IphoneCard>
            <IphoneCard
          phoneName="iphone xr"
          imgName="img/ip-xr.png"
          price={111}
        ></IphoneCard>
      </div>
    </div>
    
  );
}

export default Telfon;
