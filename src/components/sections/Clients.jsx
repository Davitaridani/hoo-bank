import { useEffect } from "react";
import { clients } from "../../assets/data/data";
import styles from "../../style";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex flex-wrap w-full`}>
				{clients.map(item => (
					<div key={item.id} className={`flex-1 sm:min-w-[190px] min-w-[120px] ${styles.flexCenter}`}
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						data-aos-dellay="300"
						data-aos-delay="200"
					>
						<img src={item.logo} alt="clients" className="md:w-[190px] sm:w-[150px] w-[90px] mb-3 sm:mb-4 md:mb-0 object-contain" />
					</div>
				))}
			</div>
		</section>
	)
}

export default Clients
