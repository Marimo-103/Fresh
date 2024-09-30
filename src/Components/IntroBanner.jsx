import React from "react";
import banner_img from "/Common Images/Introbanner.png";

const IntroBanner = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between md:gap-0 gap-8 flex-shrink-0">
      <div>
        <h1 className="max-w-[556px] md:text-[64px] text-[38px] text-[#000] font-Poppins font-semibold">
          Find The Best Fashion Style <br />
          For You
        </h1>
        <p className="max-w-[556px] md:text-[22px] text-sm text-[#000] font-Poppins tracking-wide md:tracking-wider md:mt-[38px] mt-6 md:mb-[76px] mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
          pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum
          non viverra.
        </p>
        <button className="md:px-[91px] px-[35px] md:py-[25px] py-[10px] border border-black md:rounded-[10px] rounded-[5px] bg-black text-white md:text-2xl text-sm font-Poppins md:font-semibold font-medium duration-300 hover:bg-transparent hover:text-black">
          SHOP NOW
        </button>
      </div>
      <div className="image md:w-[627px] md:h-[674px] sm:w-auto w-[98%]">
        <img src={banner_img} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default IntroBanner;
