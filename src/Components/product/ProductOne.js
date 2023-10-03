import React from "react";
import { Link } from "react-router-dom";

function ProductOne(props) {
  return (
    <>
      <div className="card border-0">
        <div className="card-body">
          <Link as={Link} to={props.pictureorj}>
            <img
              src={props.picture}
              className="figure-img1 img-fluid rounded-0 shadow"
              alt="..."
            />
          </Link>
          <Link
            as={Link}
            to={props.picture}
            className="card-title text-dark"
            data-fslightbox="gallery"
          >
            <h6 className="card-title text-center">{props.title}</h6>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductOne;
