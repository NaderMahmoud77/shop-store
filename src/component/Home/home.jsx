import "./home.css";
// Animation
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export let MyHome = () => {
  let [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <>
      <section className="home">
        <div className="container">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="content">
              <h2 className="animated-text">
                {" "}
                تـسـوق - لكل بيت ذوق ولكل شخص أناقة
              </h2>
              <p className="animated-text">
                كل ما تحتاجه لبيتك وستايلك... في مكان واحد
              </p>
            </div>
            <p className="btn animated-text">꧁ تـسـوق ꧂</p>
          </motion.div>
        </div>
      </section>
      <section></section>
    </>
  );
};
