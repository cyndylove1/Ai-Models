import Buttons from "./Buttons";
import content from "../../public/Frame 1984078106 (3).png";

export default function Content() {
    return (
      <>
        <div className="lg:w-[1042px] w-full rounded-[11px] bg-[#F6FAF3] md:flex-row flex-col flex items-center justify-between flex mx-auto overflow-hidden mb-[5rem]">
          <div className="md:px-10 px-4">
            <h6 className="text-[19px] font-[inter] font-sans py-6 md:pt-0 font-[600] text-[#828282] leading-[100%]">
              Content Generation
            </h6>
            <h2 className="lg:text-[42px]  font-[figtree] text-[32px] font-[600] text-[#22263F] w-full md:w-[80%]">
              Create quality content easily with AI that knows your brand and
              audience.
            </h2>
            <Buttons
              type="button"
              text="Learn More"
              className="text-white mt-4 bg-[#03217f] w-[113px] h-[35px] rounded-[4px] text-[13px] font-[500]"
            />
          </div>
          <div className="pt-10 mx-4 md:mx-0 md:w-screen">
            <img src={content} alt="object-cover" />
          </div>
        </div>
      </>
    );
}