import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from "@mui/material";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <Fab
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: 'rgba(0,128,128,0.7)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgba(0,128,128,1)',
          },
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          transition: '0.3s',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    )
  );
}
