import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Button from "react-bootstrap/Button";

const Splash = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/4690-timeline.json"),
    });
  }, []);

  return (
    <div>
      <br></br>
      <div className="container" ref={container}>
        <Button variant="primary" size="lg" block>
          Enter
        </Button>
      </div>
    </div>
  );
};

export default Splash;
