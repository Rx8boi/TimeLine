import React from "react";
import { ReactComponent as GitLogo } from "../../assets/icons8-github.svg";
import { ReactComponent as InstaLogo } from "../../assets/icons8-instagram.svg";
import { ReactComponent as FaceLogo } from "../../assets/icons8-facebook.svg";
import { ReactComponent as TwitterLogo } from "../../assets/icons8-twitter.svg";
import { ReactComponent as LinkedLogo } from "../../assets/icons8-linkedin.svg";

const ReactComponent = () => {
  return (
    <div>
      <InstaLogo />
      <FaceLogo />
      <TwitterLogo />
      <LinkedLogo />
      <GitLogo />
    </div>
  );
};
export default ReactComponent;
