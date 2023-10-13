/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function ContactWay(props) {
  return (
    <div className="card border-dark text-white bg-dark mb-3 g-4">
      <div className="card-body">
        <h5 className="card-header bg-dark">{props.quarries}</h5>
        <br />
        <p className="card-text">{props.address}</p>
        <p className="card-text">
          <small className="text-muted">{props.city}</small>
        </p>
      </div>
      <iframe
        src={props.picture}
        width="100%"
        height="300"
        style={{ border: "10px solid #212529" }}
        title="Google Map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactWay;
