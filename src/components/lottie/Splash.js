import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Splash = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/4690-timeline.json"),
    });
  }, []);

  return (
    <div>
      <br></br>
      <div className="container" ref={container}></div>
    </div>
  );
};

export default Splash;
