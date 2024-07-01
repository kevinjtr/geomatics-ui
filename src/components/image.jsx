import React from "react";
import { Link } from "react-router-dom";
import Image from './Image'

export const Image = ({ id, title, largeImage, smallImage}) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <Link to={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <Image src={smallImage} className="img-responsive" alt={title} />{" "}
        </Link>
        {" "}
      </div>
    </div>
  );
};
