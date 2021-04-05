import React from "react";
import PropTypes from "prop-types";

Footer_v2.propTypes = {};

function Footer_v2(props) {
  return (
    <div className="wrapper__footer container">
      <img src={process.env.PUBLIC_URL + "/images/imgFooter.png"} alt="" />
    </div>
  );
}

export default Footer_v2;
