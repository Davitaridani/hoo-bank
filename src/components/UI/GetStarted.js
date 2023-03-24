import React, { useEffect } from "react";
import styles from "../../style";
import { arrowUp } from "../../assets/img";

import AOS from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`${styles.flexCenter} w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium sm:text-[18px] text-[15px]  leading-[23px] mr-2">
            <span className="text-gradient sm:text-[18px] text-[15px]">
              Get
            </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient sm:text-[18px] text-[15px]">
            Started
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
