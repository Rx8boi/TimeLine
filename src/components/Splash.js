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
      animationData: require("./6301-timeline.json"),
    });
  }, []);

  return (
    <div>
      <h1>React Lottie Demo</h1>
      <div className="container" ref={container}></div>
    </div>
  );
};

export default Splash;
