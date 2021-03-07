import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { StickyContainer, Sticky } from "react-sticky";

const Styles = styled.div`
  .container {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: yellow;
  }
`;

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
    <Styles>
      <StickyContainer>
        <div className="1" style={{ height: "100vh" }} />
        <div className="2" style={{ background: "blue" }}>
          <Sticky>
            {({ style }) => (
              <div
                className="container"
                ref={container}
                style={{ height: "50px", background: "red", ...style }}
              >
                <div className="container" ref={container}></div>
              </div>
            )}
          </Sticky>
        </div>
      </StickyContainer>
    </Styles>
  );
};

export default VerticalLine;
