import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "./BackToTop.scss";

const BackToTop = () => {
  const [btt, setBtt] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setBtt(true);
    } else {
      setBtt(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div
      className={`back-to-top ${btt ? "showBtn" : "hideBtn"}`}
      onClick={scrollToTop}
    >
      <BiArrowToTop />
    </div>
  );
};

export default BackToTop;
