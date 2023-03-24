import { quotes } from "../../assets/img"

const FeedbackCard = ({ content, name, title, img }) => {
	return (
		<div className="flex justify-between flex-col px-8 py-10 sm:px-10 sm:py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0 feedback-card">
			<img src={quotes} alt="double_quotes" className="w-[25px] h-[18px] sm:w-[42px] sm:h-[27px] object-contain" />
			<p className="font-poppins text-normal text-sm sm:text-[18px] sm:leading-[32px] leading-[25px] text-white my-4 sm:my-10">{content}</p>
			<div className="flex flex-row items-center">
				<img src={img} alt={name} className="sm:h-[50px] sm:w-[50px] w-[40px] h-[40px] rounded-full " />
				<div className="flex flex-col ml-4">
					<h1 className="font-poppins font-semibold text-[17px] sm:text-[23px] leading-[25px] sm:leading-[32px] text-white sm:mb-2 mb-0">{name}</h1>
					<p className="font-poppins text-normal text-sm sm:text-[17px] leading-[32px] text-dimWhite ">{title}</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
