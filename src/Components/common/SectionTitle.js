import React from "react";

function SectionTitle(props) {
  return (
    <div className="title-box">
      <h2 className="mb-5 mt-5 font-weight-bold">{props.title}</h2>
      <hr className="ayrac" />
      <i className="fas fa-diamond ibeyaz"></i>
    </div>
  );
}

export default SectionTitle;
