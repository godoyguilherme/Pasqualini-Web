import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import "./logo.css";

const Logo = () => {
  return (
    <div className="isoLogoWrapper">
      <h3>
        <Link to="/">
          <Icon type="home" style={{ fontSize: "32px" }} />
          <span style={{ marginLeft: "10px" }}>Pasqualini</span>
        </Link>
      </h3>
    </div>
  );
};

export default Logo;
