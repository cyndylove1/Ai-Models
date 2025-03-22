import Buttons from "./Buttons";
import market from "../../public/Frame 1984078106.png"

export default function MarketPrediction() {
    return (
      <>
        <div className="lg:w-[1042px] w-full md:flex-row flex-col rounded-[11px] bg-[#F6FAF3] flex items-center justify-between mx-auto mb-[5rem]">
          <div className="md:px-10 px-4">
            <h6 className="text-[19px] pt-4 md:pt-0 font-[600] text-[#828282] leading-[100%]">
              Market Prediction
            </h6>
            <h2 className="lg:text-[42px] text-[32px] w-full font-[600] text-[#22263F]">
              Use AI insights for smarter business decisions and
              stay 
              competitive.
            </h2>
            <Buttons
              type="button"
              text="Learn More"
              className="text-white mt-4 bg-[#03217f] w-[113px] h-[35px] rounded-[4px] text-[13px] font-[500]"
            />
          </div>
          <div className="pt-10 mx-4 md:mx-0 md:w-screen">
            <img src={market} alt="object-cover" />
          </div>
        </div>
      </>
    );
}