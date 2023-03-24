import React, { useState } from 'react'
import { close, logo, menu } from "../../assets/img";
import { navLinks } from '../../assets/data/data';

const NavbarCompt = () => {

	const [toggle, setToggle] = useState(false)
	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt="logo" className="sm:w-[125px] sm:h-[35px] h-[30px]" />
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{
					navLinks.map((item, index) => (
						<li key={item.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
							<a key={index} href={`#${item.id}`} className="text-white ">
								{item.title}
							</a>
						</li>
					))
				}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="Menu Mobile"
					className='sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] object-contain' onClick={() => setToggle((prev) => !prev)}
				/>
				<div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{
							navLinks.map((item, index) => (
								<li key={item.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
									<a key={index} href={`#${item.id}`} className="text-white ">
										{item.title}
									</a>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		</nav >
	)
}

export default NavbarCompt
