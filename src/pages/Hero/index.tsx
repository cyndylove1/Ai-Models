import Buttons from "../../components/Buttons";
import Navbar from "../../components/Navbar";
import CompanyLogo from "../CompanyLogo";
import Models from "../Models";

export default function Hero() {
    return (
      <>
        <div className="hero-section lg:h-screen h-[50rem]">
          <Navbar />
          <div className="lg:pt-0 ">
            <h6 className="text-[#7191FF] pt-10 font-[Plus Jakarta Sans] text-center text-[16px] leading-[38px] font-[700]">
              Leverage on Automation
            </h6>
            <h2 className="text-white text-center font-[figtree] text-[50px] md:text-[76px] leading-[82px] font-[600]">
              AI Models for <br /> Business Solutions
            </h2>
            <h5 className="text-white text-center font-[Plus Jakarta Sans] px-2 md:text-[22px] text-[20px] leading-[38px] font-[500] py-4 lg:w-[70%] mx-auto">
              Leverage the power of AI to automate, analyze, and optimize your
              workflows. Our specialized models are designed to fit different
              business needs.
            </h5>
            <div className="flex justify-center">
              <Buttons
                type="button"
                text="Get Started Now"
                className=" rounded-[12px] w-[192px] h-[50px]  text-[#05152C] bg-white font-[600]"
              />
            </div>
          </div>
        </div>
        <CompanyLogo />
        <Models />
      </>
    );
}