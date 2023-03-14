import { features } from "../../assets/data/data";
import styles, { layouts } from "../../style";
import Button from "../UI/Button";
import Card from "../UI/Card";


const Bussiness = () => {

	return (
		<section id="features" className={`${layouts.section}`}>

			<div className={layouts.sectionInfo}>
				<h1 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we’ll handle the money.</h1>
				<p className={`${styles.paragraph} max-w-[520px] mt-5 mb-10`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
				<Button />
			</div>

			<div className={`${layouts.sectionImg} flex-col`}>
				{
					features.map((item, index) => (
						<Card key={item.id} {...item} index={index} />
					))
				}

			</div>

		</section>
	)
}

export default Bussiness
