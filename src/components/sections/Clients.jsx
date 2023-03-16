import { clients } from "../../assets/data/data";
import styles from "../../style";

const Clients = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} flex flex-wrap w-full`}>
				{clients.map(item => (
					<div key={item.id} className={`flex-1 sm:min-w-[190px] min-w-[120px] ${styles.flexCenter}`}>
						<img src={item.logo} alt="clients" className="sm:w-[190px] w-[100px] object-contain" />
					</div>
				))}
			</div>
		</section>
	)
}

export default Clients
