import React, { useEffect } from "react";
import { apple, bill, google } from "../../assets/img";
import styles, { layouts } from "../../style";
import AOS from "aos";
import "aos/dist/aos.css";


const Billing = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section id="product" className={`${layouts.sectionReverse} `}>
			<div className={`${layouts.sectionImgReverse}`}
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-offset="400"
			>
				<img src={bill} alt="billing" className="w-[90%] h-[90%] md:w-[100%] md:h-[100%] relative z-[5] animate-shake"
				/>
				<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
			</div>
			<div className={layouts.sectionInfo}>
				<h1 className={`${styles.heading2} leading-[45px]`}
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-offset="200"
				>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-base`}
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-offset="300"
				>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
				<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
					<img src={apple} alt="apple_playSotre" className="sm:w-[128px] sm:h-[42px] w-[120px] h-[40px] object-contain mr-5 cursor-pointer"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-delay="200"
						data-aos-offset="300"
					/>
					<img src={google} alt="google_playSotre" className="sm:w-[128px] sm:h-[42px] w-[120px] h-[40px] object-contain cursor-pointer"
						data-aos="fade-left"
						data-aos-delay="200"
						data-aos-duration="1000"
						data-aos-offset="300"
					/>
				</div>
			</div>
		</section >
	)
}

export default Billing
