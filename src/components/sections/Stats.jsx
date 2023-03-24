import { stats } from "../../assets/data/data";
import styles from "../../style";

const Stats = () => {
	return (
		<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
			{
				stats.map(item => (
					<div key={item.id} className={`flex-1 flex justify-center items-center flex-row m-3`} >
						<h1 className="font-poppins font-semibold xs:text-[40px] text-[23px] xs:leading-[53px] leading-[43px] text-white  mr-3">{item.value}</h1>
						<p className="font-poppins font-normal xs:text-[20px] text-[14px] xs:leading-[26px] leading-[22px] text-gradient uppercase">{item.title}</p>
					</div>
				))
			}
		</section >
	)
}

export default Stats
