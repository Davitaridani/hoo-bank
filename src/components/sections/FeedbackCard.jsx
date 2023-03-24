import React, { useEffect } from "react";
import { quotes } from "../../assets/img";
import AOS from "aos";
import "aos/dist/aos.css";


const FeedbackCard = ({ content, name, title, img }) => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="flex justify-between flex-col px-8 py-10 sm:px-10 sm:py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0 feedback-card">
			<img src={quotes} alt="double_quotes" className="w-[25px] h-[18px] sm:w-[27px] sm:h-[20px]  md:w-[42px] md:h-[27px] object-contain" data-aos="zoom-in"
				data-aos-duration="800" />
			<p className="font-poppins text-normal text-sm md:text-[18px] sm:leading-[30px] md:leading-[32px] leading-[25px] text-white my-4 sm:my-7 md:my-10"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="200"
				data-aos-offset="200"
			>{content}</p>
			<div className="flex flex-row items-center"
				data-aos="fade-up"
				data-aos-duration="1200"
				data-aos-delay="300"
				data-aos-easing="ease-in-sine"
				data-aos-offset="200"
			>
				<img src={img} alt={name} className="sm:h-[50px] sm:w-[50px] w-[40px] h-[40px] rounded-full " />
				<div className="flex flex-col ml-4">
					<h1 className="font-poppins font-semibold text-[17px] sm:text-[18px] md:text-[23px] leading-[25px] sm:leading-[32px] text-white sm:mb-2 mb-0">{name}</h1>
					<p className="font-poppins text-normal text-sm sm:text-base md:text-[17px] leading-[32px] text-dimWhite ">{title}</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
