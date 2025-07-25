// MUI
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Animation
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Dummy Data
const testimonials = [
  {
    id: 1,
    name: "نور محمد ",
    feedback: "الخدمة ممتازة والتوصيل سريع جدًا! أنصح الجميع بالتجربة.",
  },
  {
    id: 2,
    name: "نادر محمود",
    feedback: "جودة المنتجات رائعة وفريق الدعم متعاون.",
  },
  {
    id: 3,
    name: "حياة نادر",
    feedback: "أفضل موقع تسوق جربته، كل حاجة كانت سلسة ومنظمة.",
  },
  {
    id: 4,
    name: "يونس نادر",
    feedback: "موقع مميز جدًا، المنتجات أصلية والتعامل راقي جدًا مع العملاء.",
  },
];

///////////
export let ComentSingle = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <motion.div
          ref={ref}
          key={testimonial.id}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Accordion
            key={testimonial.id}
            className="testimonial"
            sx={{ mb: 2 }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box display="flex" alignItems="center" gap={2}> 

                <Avatar alt={testimonial.name}>{testimonial.name[0]}</Avatar>

                <Typography className="testi-title" fontWeight="bold">
                  {testimonial.name}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Typography className="testi-feed">
                {testimonial.feedback}
              </Typography>
            </AccordionDetails>

          </Accordion>
        </motion.div>
      ))}
    </>
  );
};
