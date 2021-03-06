import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const VerticalLine = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/33485-vertical-line.json"),
    });
  }, []);

  return (
    <div>
      <div className="container" ref={container}></div>
    </div>
  );
};

export default VerticalLine;
