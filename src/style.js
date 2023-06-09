const styles = {
  boxWidth: "xl:max-w-[1300px] w-full",

  heading2:
    "font-poppins font-semibold md:text-[48px] sm:text-[35px] text-[30px] text-white md:leading-[76.8px] sm:leading-[50px] leading-[45px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-sm sm:text-[16px] leading-[25px] sm:leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-10",
  padding: "md:px-16 px-6 md:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layouts = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
