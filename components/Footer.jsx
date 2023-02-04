import React, { useState } from "react";
import ScrollArrow from "../assets/ScrollArrow.svg";

import Easter from "./Easter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
const Footer = () => {
  const [EasterEgg, setEasterEgg] = useState(false);
  const [Once, setOnce] = useState(true);
  const { scroll } = useLocomotiveScroll();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {EasterEgg && <Easter setEasterEgg={setEasterEgg} setOnce={setOnce} Once={Once}/>}
      </AnimatePresence>
      <div
        data-scroll-section
        className="flex items-center md:justify justify-center  pt-4 pb-2"
      >
        <div
          className="md:block hidden items-center"
          onClick={() =>
            scroll.scrollTo("top", {
              duration: 2,
            })
          }
        >
          <div className="transform rotate-180 flex items-center md:justify justify-center  pt-0 pb-2">
            <ScrollArrow />
          </div>
          <p className="scroll-button text-lg font-bold tracking-widest leading-snug text-gray-100 uppercase">
            scroll to top
          </p>
        </div>

      </div>
    </>
  );
};

export default Footer;
