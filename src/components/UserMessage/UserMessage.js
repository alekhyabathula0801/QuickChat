import React, { memo } from "react";
import PropTypes from "prop-types";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { icon, title, subtext, isUser, isActive, fileData, fileType } = props;

  const onCopy = () => {
    navigator.clipboard.writeText(title).then(() => {
      alert("text copied");
    });
  };

  return (
    <div className={`qc-user-message ${isUser ? "active" : ""}`}>
      <div className="qc-um-icon-wrapper">
        <img alt="icon" src={icon} className="qc-um-icon" />
        <span className={`qc-um-dot ${isActive ? `qc-um-dot-active` : ""}`} />
      </div>
      <div>
        <div className="qc-um-title-wrapper">
          {fileData && (
            <object
              className="qc-um-attachment"
              datatype={fileType}
              data={fileData}
            >
              attachment
            </object>
          )}
          <div className="qc-um-title" onClick={onCopy}>
            {title}
          </div>
        </div>
        <div className="qc-um-subtext">{subtext}</div>
      </div>
    </div>
  );
};

export default memo(UserMessage);

UserMessage.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string,
  isUser: PropTypes.bool,
  isActive: PropTypes.bool,
  fileData: PropTypes.string,
  fileType: PropTypes.string,
};

UserMessage.defaultProps = {
  icon: "",
  title: "",
  subtext: "",
  fileData: "",
  fileType: "",
  isUser: false,
  isActive: false,
};
