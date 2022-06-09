import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./ProductCard.module.css";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
const ProductCard = (props) => {
  const data = props.data;
  return (
    <div className={classes.card}>
      <div className={classes["card-image"]}>
        <img src={data.image} alt={data.imageAlt} />
      </div>
      <div className={classes["like-btn"]}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={classes["card-header"]}>
        <div>
          <h1>{data.title}</h1>
          <h2>{data.secondaryTitle}</h2>
        </div>
        <div className={classes.rate}>
          <h1>${data.price}</h1>
          <p>.{data.cents}</p>
        </div>
      </div>
      <div className={classes["card-rating"]}>
        <div className={classes["star-one"]}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes["star-two"]}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes["star-three"]}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes["star-four"]}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={classes["star-five"]}>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className={classes.review}>{data.review} Reviews</p>
      </div>
      <div className={classes["card-btn"]}>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
