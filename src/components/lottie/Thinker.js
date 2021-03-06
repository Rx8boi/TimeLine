import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Thinker = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/37478-intelligence-ai.json"),
    });
  }, []);

  return (
    <div>
      <div className="container" ref={container}></div>
    </div>
  );
};

export default Thinker;
