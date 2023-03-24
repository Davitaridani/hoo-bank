import React from "react";
import { features } from "../../assets/data/data";
import styles from "../../style";

const Card = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-4 sm:p-6 rounded-[20px] feature-card ${
        index !== features.length - 1 ? "mb-4" : "mb-0"
      }`}
    >
      <div
        className={` h-[55px] w-[55px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="icon"
          className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[50%] md:h-[50%] object-contain animate-bounce-in"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-white text-[17px] sm:text-[20px] leading-[23px] mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="font-poppins font-normal text-dimWhite text-sm leading-[25px] mb-1 sm:text-[16px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
