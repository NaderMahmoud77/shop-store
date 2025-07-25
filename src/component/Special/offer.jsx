/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// Animation
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// MUI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

// Btn See More
import { ButtonSeeMore } from "../ButtonSeeMore/buttonSeeMore";

// ROUTER
import { Link } from "react-router-dom";

const variants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
};

////////////
export const Offer = React.memo(({ offer, index }) => {
  let { firstImage, title, price, discount, rating, id } = offer;

  let calcDiscount = price - (discount * price) / 100;

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
    >
      <Card className="offer">
        <img src={firstImage} alt={title} className="image-banner" />

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="offer-title"
        >
          {title}
        </Typography>

        <div className="rating">{rating}</div>

        <div className="sale-price">
          <b className="price">${price}</b>
          <b className="calc-discount">${calcDiscount}</b>
        </div>

        <div className="discount">خصم {discount}% 🔥</div>

        <Link to={`/special-offer/${id}`}>
          <ButtonSeeMore />
        </Link>
      </Card>
    </motion.div>
  );
});
