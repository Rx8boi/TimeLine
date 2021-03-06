import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const NoMatch = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/8909-404-error.json"),
    });
  }, []);

  return <div className="container" ref={container}></div>;
};
export default NoMatch;
