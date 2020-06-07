import React from "react";
import ME from "../../../resources/img/Me_italy.jpg";

function Hero() {
  return (
    <>
      <img
        src={ME}
        alt="Shobhit stnading in front of hills. red tshirt, smiling"
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      />
    </>
  );
}

export default Hero;
