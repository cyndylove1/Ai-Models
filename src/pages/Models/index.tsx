import { useState } from "react";
import Buttons from "../../components/Buttons";
import "swiper/swiper-bundle.css";
import MarketPrediction from "../../components/MarketPrediction";
import Finance from "../../components/Finance";
import Analytics from "../../components/Analytics";
import Content from "../../components/Content";
import CustomerSupport from "../../components/CustomerSupport";

export default function Models() {
    const [activeButton, setActiveButton] = useState("Market Prediction"); 

  return (
    <>
      <div className="text-center">
        <h2 className="pt-20 text-[50px] leading-[62px] font-[600] text-[#22263F]">
          AI Models tailored for your <br /> business needs
        </h2>
        <h5 className="md:text-[22px] text-[20px] leading-[38px] font-[500] lg:w-[70%] px-2 mx-auto text-[#828282] pt-4 pb-6">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </h5>
      </div>
      <div className="mx-4 md:mx-0">
        <div className="md:h-[44px] h-full md:w-[701px] w-full flex md:flex-row flex-col rounded-[12px] border-[1px] border-[#E4E4E7] gap-[4px] mx-auto">
          {/* <div> */}
          <Buttons
            type="button"
            onClick={() => setActiveButton("Market Prediction")}
            text="Market Prediction"
            className={`rounded-[8px] w-[158px] transition-all duration-300 ease-in-out m-[3px] h-[36px] text-[16px] font-[600] ${
              activeButton === "Market Prediction"
                ? "bg-[#03217f] text-white"
                : "text-[#A7A7A7]"
            }`}
          />

          {/* </div> */}

          <Buttons
            type="button"
            onClick={() => setActiveButton("Finance")}
            text="Finance"
            className={`rounded-[8px] transition-all duration-300 ease-in-out w-[85px] m-[3px] h-[36px]  font-[600] ${
              activeButton === "Finance"
                ? "bg-[#03217f] text-white"
                : "text-[#A7A7A7]"
            }`}
          />
          <Buttons
            type="button"
            onClick={() => setActiveButton("Analytics")}
            text="Analytics"
            className={`rounded-[8px] w-[96px] transition-all duration-300 ease-in-out m-[3px] h-[36px] font-[600] ${
              activeButton === "Analytics"
                ? "bg-[#03217f] text-white"
                : "text-[#A7A7A7]"
            }`}
          />
          <Buttons
            type="button"
            onClick={() => setActiveButton("Content Generation")}
            text="Content Generation"
            className={`rounded-[8px] w-[174px] m-[3px] h-[36px] transition-all duration-300 ease-in-out font-[600] ${
              activeButton === "Content Generation"
                ? "bg-[#03217f] text-white"
                : "text-[#A7A7A7]"
            }`}
          />
          <Buttons
            type="button"
            text="Customer Support"
            onClick={() => setActiveButton("Customer Support")}
            className={`rounded-[8px] w-[164px] transition-all duration-300 ease-in-out m-[3px] h-[36px] font-[600] ${
              activeButton === "Customer Support"
                ? "bg-[#03217f] text-white"
                : "text-[#A7A7A7]"
            }`}
          />
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        {activeButton === "Market Prediction" && (
          <div className="animate-fadeIn">
            <MarketPrediction />
          </div>
        )}
        {activeButton === "Finance" && (
          <div className="animate-fadeIn">
            <Finance />
          </div>
        )}
        {activeButton === "Analytics" && (
          <div className="animate-fadeIn">
            <Analytics />
          </div>
        )}
        {activeButton === "Content Generation" && (
          <div className="animate-fadeIn">
            <Content />
          </div>
        )}
        {activeButton === "Customer Support" && (
          <div className="animate-fadeIn">
            <CustomerSupport />
          </div>
        )}
      </div>
    </>
  );
}
