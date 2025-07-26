import { useEffect } from "react";
import React from "react";
// Animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// MUI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
// rating
import { Ratings } from "../Rating/rating";
// Btn See More
import { ButtonSeeMore } from "../ButtonSeeMore/buttonSeeMore";
// ROUTER
import { Link } from "react-router-dom";

//////////////////////
const SliderCard = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ y: 50, opacity: 0 }} animate={controls}>
      <Card className="slider">
        <img src={data.image} alt={data.title} className="img" />
        <Typography gutterBottom variant="h5">
          {data.title}
        </Typography>
        <p className="rating-slider">{data.rating}</p>
        <div className="btn-price">
          <Link to={`/single-prouduct/${data.id}`}>
            <ButtonSeeMore />
          </Link>
          <b className="prices">${data.price}</b>
        </div>
      </Card>
    </motion.div>
  );
};

export default React.memo(SliderCard);
