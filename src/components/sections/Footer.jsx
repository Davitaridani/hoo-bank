import styles from "../../style";
import { logo } from "../../assets/img";
import { footerLinks, socialMedia } from "../../assets/data/data";

const Footer = () => {
	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className="flex-1 flex flex-col justify-start mr-10">
					<img src={logo} alt="footer" className="md:w-[260px] md:h-[70px] sm:w-[180px] sm:h-[90px] w-[150px] h-[50px] object-contain" />
					<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
				</div>

				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map(footerLinks => (
						<div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={footerLinks.key}>
							<h3 className="font-medium font-poppins text-[19px] leading-[27px] text-white">{footerLinks.title}</h3>
							<ul className="list-none mt-5">
								{footerLinks.links.map((itemLink, index) => (
									<li key={itemLink.name} className={`font - poppins font-normal text-sm sm:text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLinks.links.length - 1 ? "mb-2" : "mb-0"}`}>
										{itemLink.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="footer-copyright w-full flex justify-between items-center md:flex-row flex-col pt-4 sm:pt-6 border-t-[1px] border-[#3f3e45]">
				<p className="font-normal font-poppins text-center text-sm sm:text-[15px] leading-[25px] text-dimWhite">© 2023  HooBank Web By Ahmat Davit. All Rights Reserved.</p>
				<div className="flex flex-row md:mt-0 mt-4">
					{socialMedia.map((item, index) => (
						<a href={item.link} target="_blank" rel="noreferrer noopener">
							<img key={item.id} src={item.icon} alt={item.id} className={`sm:w-[20px] sm:h-[20px] w-[17px] h-[17px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
						</a>
					))}
				</div>
			</div>
		</footer >
	)
}
export default Footer
