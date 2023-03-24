import React, { useEffect } from "react";
import styles from "../../style";
import { discount, robot } from "../../assets/img";
import GetStarted from "../UI/GetStarted";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} pb-16 sm:py-8`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32] h-[32px] " />
          <p className={`${styles.paragraph} ml-2  ss:text-[17px] text-sm `}>
            <span className="text-white ">15% </span>
            DISCOUNT FOR
            <span className="text-white"> 1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full relative z-[0]">
          <h1 className="flex-1 font-poppins font-semibold sm:text-[45px] md:text-[72px] text-[30px] text-white md:leading-[100px] sm:leading-[60px] leading-[60px]"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay=""
            data-aos-easing="ease-in-sine"
          > The Next
            <br className="sm:block hidden" />
            <span className="text-gradient"

            > Generation</span> {""} <br />
          </h1>
          <div className="hidden md:flex md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold  md:text-[68px] text-[30px] text-white sm:text-[45px] md:leading-[100px] sm:leading-[60px] leading-[30px] w-full "
          data-aos="fade-right"
          data-aos-duration="2500"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-sm ss:text-[17px]`}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-easing="ease-in-back"
        >
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter}   md:my-0 my-10 relative `}>
        <img src={robot} alt="Billing" className="w-[100%] h-[100%] relative z-[5] animate-shake" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient" />
        <div className="absolute z-[3] w-[50%] h-[50%] right-0 bottom-20 blue__gradient" />
      </div>

      <div className={`md:hidden ${styles.flexCenter} animate-bounce`}>
        <GetStarted />
      </div>

    </section >

  )
}
export default Hero;
