import Buttons from "./Buttons";
import finance from "../../public/Frame 1984078106 (1).png"

export default function Finance() {
    return (
      <>
        <div className="lg:w-[1042px] w-full md:flex-row flex-col  rounded-[11px] bg-[#F6FAF3] flex items-center justify-between flex mx-auto overflow-hidden mb-[5rem]">
          <div className="md:px-10 px-4">
            <h6 className="text-[19px] pt-4 md:pt-0 font-[600] text-[#828282] leading-[100%]">
              Finance
            </h6>
            <h2 className="lg:text-[42px]  font-[figtree] text-[32px] font-[600] w-full text-[#22263F] md:w-[80%]">
              Our AI models analyze financial data for confident investments.
            </h2>
            <Buttons
              type="button"
              text="Learn More"
              className="text-white mt-4 bg-[#03217f] w-[113px] h-[35px] rounded-[4px] text-[13px] font-[500]"
            />
          </div>
          <div className="pt-10 mx-4 md:mx-0 md:w-screen">
            <img src={finance} alt="object-cover" />
          </div>
        </div>
      </>
    );
}