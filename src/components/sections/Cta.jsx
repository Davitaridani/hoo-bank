import { useEffect } from "react";
import styles from "../../style";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Cta = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[15px] box-shadow sm:px-10 sm:py-8`}

			data-aos="fade-up"
			data-aos-duration="1300"
			data-aos-offset="300"
			data-aos-anchor-placement="center-bottom"
		>
			<div className="flex flex-1 flex-col">
				<h2 className={styles.heading2}>Let’s try our service now!</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
			</div>
			<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-6 sm:mb-0 mb-2`}>
				<Button />
			</div>
		</section >
	)
}

export default Cta
