import { features } from "../../assets/data/data";
import styles, { layouts } from "../../style";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Bussiness = () => {

	return (
		<section id="features" className={`${layouts.section}`}>
			<div className={layouts.sectionInfo}>
				<h1 className={`${styles.heading2} leading-[45px] `}>You do the business, <br className="sm:block hidden" /> we’ll handle the money.</h1>
				<p className={`${styles.paragraph} text-sm ss:text-base max-w-[520px] ss:mt-5 ss:mb-10 mb-8 mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
				<Button />
			</div>
			<div className={`${layouts.sectionImg} flex-col mt-20 ss:mt-10`}>
				{
					features.map((item, index) => (
						<Card key={item.id} {...item} index={index} />
					))
				}
			</div>
		</section >
	)
}

export default Bussiness
