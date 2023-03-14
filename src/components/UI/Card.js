import React from "react";
import { features } from "../../assets/data/data";
import styles from "../../style";

const Card = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h3 className="font-poppins font-semibold text-white text-[20px] leading-[23px] mb-3">
          {title}
        </h3>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[25px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
