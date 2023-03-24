import { card } from "../../assets/img";
import styles, { layouts } from "../../style";
import Button from "../UI/Button";

const CardDeal = () => {
	return (
		<section className={layouts.section}>
			<div className={layouts.sectionInfo}>
				<h1 className={`${styles.heading2} leading-[45px]`}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h1>
				<p className={`${styles.paragraph} max-w-[470px] text-sm mt-4 mb-7 sm:mt-5 sm:mb-10`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
				<Button />
			</div>
			<div className={layouts.sectionImg}>
				<img src={card} alt="card" className="w-[100%] h-[100%]" />
			</div>
		</section>
	)
}

export default CardDeal
