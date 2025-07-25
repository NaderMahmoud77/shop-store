// Animation
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Btn See More
import { ButtonSeeMore } from "../ButtonSeeMore/buttonSeeMore";
import { Link } from "react-router-dom";

const variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

////////// 
export let CategoryCard = ({ item, index }) => {
  let [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });


  return (
    <motion.div
     ref={ref}
      className="item"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    >
      <img src={item.image} alt={item.title} className="item-img" />
      <h2 className="category-title">{item.title}</h2>
      <p>{item.rating}</p>
      <h4 className="category-price">
        <b>السعر:</b> {item.price}$
      </h4>
      <Link to={`/single-category/${item.id}`}>
        <ButtonSeeMore />
      </Link>
    </motion.div>
  );
};
