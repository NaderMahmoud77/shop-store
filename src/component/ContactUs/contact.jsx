// Animation
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// MUI
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import "./conatct.css";
import { useEffect, useState } from "react";

export let ContactUs = () => {
  // click send show loading
  let [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h2 className="title title-contact-us">تواصل معنا</h2>
      <motion.div
        ref={ref}
        initial={{ y: 80, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="contents">
          <div className="cont">
            <h1 className="title-contact">تواصل معنا</h1>

            {/* INPUTS */}
            <form>
              <div>
                <label>الاسم</label>
                <input
                  placeholder=" الاسم"
                  className="name"
                  autoComplete="off"
                />
              </div>

              <div>
                <label>الايميل</label>
                <input
                  type="email"
                  className="email"
                  placeholder="ادخل بريدك الإلكتروني"
                />
              </div>

              <div className="textera">
                <label>رساله</label>
                <textarea placeholder="ارسل رساله الينا" />
              </div>

              {/* SEND MESSAGE */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  className="send"
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    setLoading(true);
                    setTimeout(() => setLoading(false), 3000);
                  }}
                >
                  <SendIcon className="icon" />
                  {loading ? "جاري الإرسال..." : "ارسال"}
                </Button>
              </motion.div>
              {/* ===== SEND MESSAGE ===== */}
            </form>
            {/* ===== INPUTS ===== */}
          </div>
          {/* iamge */}
          <div className="texts">
            <img
              src="/images/contact/contact-2.jpg"
              alt="تواصل معنا"
              className="contact-img"
            />
          </div>
          {/* === iamge === */}
        </div>
      </motion.div>
    </div>
  );
};
