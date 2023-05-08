import React from "react";
import { ReactComponent as Link } from "../../assets/link.svg";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./ShareLink.scss";

const ShareLink = (props) => {
  return (
    <WrapperBox className="qc-share-link">
      <div className="qc-sl-title">Onboard Clients</div>
      <div className="qc-sl-subtitle">
        Share the link with prospects and discuss all stuff
      </div>
      <ButtonWithIcon title={"Copy Link"} Icon={Link} />
    </WrapperBox>
  );
};

export default ShareLink;