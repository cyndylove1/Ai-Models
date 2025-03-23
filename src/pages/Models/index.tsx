import { useState } from "react";
import Buttons from "../../components/Buttons";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
// import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MarketPrediction from "../../components/MarketPrediction";
import Finance from "../../components/Finance";
import Analytics from "../../components/Analytics";
import Content from "../../components/Content";
import CustomerSupport from "../../components/CustomerSupport";

// SwiperCore.use([Pagination]);

export default function Models() {
  const [activeButton, setActiveButton] = useState<string>("Market Prediction"); 
   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(
     null
   );
  
 
  

   const handleSlideChange = (buttonName: string, index: number) => {
     setActiveButton(buttonName);
     swiperInstance?.slideTo(index);
   };
  
  return (
    <>
      <div className="text-center">
        <h2 className="pt-20 text-[50px] leading-[62px]  font-[figtree]  font-[600] text-[#22263F]">
          AI Models tailored for your <br /> business needs
        </h2>
        <h5 className="md:text-[22px] text-[20px] font-[Plus Jakarta Sans] leading-[38px] font-[500] lg:w-[70%] px-2 mx-auto text-[#828282] pt-4 pb-6">
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs
        </h5>
      </div>
      <div>
        {/* Buttons */}
        <div className="mx-4 md:mx-0 mb-[3rem]">
          <div className="md:h-[44px] h-full md:w-[701px] w-full flex md:flex-row flex-col rounded-[12px] border-[1px] border-[#E4E4E7] gap-[4px] mx-auto">
            {/* <div> */}
            <Buttons
              type="button"
              onClick={() => handleSlideChange("Market Prediction", 0)}
              text="Market Prediction"
              className={`rounded-[8px] w-[158px] font-[figtree] transition-all duration-300 ease-in-out m-[3px] h-[36px] text-[16px] font-[600] ${
                activeButton === "Market Prediction"
                  ? "bg-[#03217f] text-white"
                  : "text-[#A7A7A7]"
              }`}
            />

            {/* </div> */}

            <Buttons
              type="button"
              onClick={() => handleSlideChange("Finance", 1)}
              text="Finance"
              className={`rounded-[8px] transition-all  font-[figtree] duration-300 ease-in-out w-[85px] m-[3px] h-[36px]  font-[600] ${
                activeButton === "Finance"
                  ? "bg-[#03217f] text-white"
                  : "text-[#A7A7A7]"
              }`}
            />
            <Buttons
              type="button"
              onClick={() => handleSlideChange("Analytics", 2)}
              text="Analytics"
              className={`rounded-[8px] w-[96px]  font-[figtree] transition-all duration-300 ease-in-out m-[3px] h-[36px] font-[600] ${
                activeButton === "Analytics"
                  ? "bg-[#03217f] text-white"
                  : "text-[#A7A7A7]"
              }`}
            />
            <Buttons
              type="button"
              onClick={() => handleSlideChange("Content Generation", 3)}
              text="Content Generation"
              className={`rounded-[8px] w-[174px]  font-[figtree] m-[3px] h-[36px] transition-all duration-300 ease-in-out font-[600] ${
                activeButton === "Content Generation"
                  ? "bg-[#03217f] text-white"
                  : "text-[#A7A7A7]"
              }`}
            />
            <Buttons
              type="button"
              text="Customer Support"
              onClick={() => handleSlideChange("Customer Support", 4)}
              className={`rounded-[8px] w-[164px]  font-[figtree] transition-all duration-300 ease-in-out m-[3px] h-[36px] font-[600] ${
                activeButton === "Customer Support"
                  ? "bg-[#03217f] text-white"
                  : "text-[#A7A7A7]"
              }`}
            />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10} 
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="mySwiper"
          onSwiper={setSwiperInstance}
        >
          <SwiperSlide className="animate-fadeIn">
            <MarketPrediction />
          </SwiperSlide>
          <SwiperSlide className="animate-fadeIn">
            <Finance />
          </SwiperSlide>
          <SwiperSlide className="animate-fadeIn">
            <Analytics />
          </SwiperSlide>
          <SwiperSlide className="animate-fadeIn">
            <Content />
          </SwiperSlide>
          <SwiperSlide className="animate-fadeIn">
            <CustomerSupport />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
