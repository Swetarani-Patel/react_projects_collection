import React from "react";
import logo from "../assets/logo.png";
import 'tailwindcss/tailwind.css'
import setting from "../assets/setting.png"
import whitearrow from "../assets/whitearrow.png"
import waterdrop from "../assets/mdi_water-outline.png"
import deleteicon from "../assets/ri_delete-bin-6-line.png"

const SideBar = () => {
  return (
    <div className="absolute top-[0px] left-[-11px] bg-gray-400 h-[1306px] flex flex-col items-center justify-start text-mini font-inter">
    <div className="bg-gray-400 flex flex-col items-center justify-center p-[15px] border-t-[1px] border-solid border-black border-b-[1px]">
      <div className="rounded-26xl w-[219px] flex flex-row items-center justify-start py-[13px] pr-2.5 pl-5 box-border">
        <img
          className="relative w-32 h-[47px] object-cover"
          alt=""
          src={logo}
        />
      </div>
    </div>
    <div className="bg-gray-400 box-border w-[249px] flex flex-col items-center justify-start pt-2.5 px-[15px] pb-[15px] gap-[10px] border-t-[1px] border-solid border-gray-300 border-b-[1px]">
      <div className="rounded-26xl w-[219px] flex flex-row items-center justify-start py-[13px] pr-2.5 pl-5 box-border text-sm text-dimgray">
        <div className="relative w-[157px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] leading-[18px] uppercase font-medium">
            Data-in
          </div>
        </div>
      </div>
      <div className="relative rounded-3xs w-[219px] h-[50px] overflow-hidden shrink-0">
        <div className="absolute top-[16px] left-[47px] leading-[18px] font-medium">
          Energy
        </div>
        <img
          className="absolute top-[13px] left-[98px] w-6 h-6 overflow-hidden"
          alt=""
          src={whitearrow}
        />
        <img
          className="absolute top-[16px] left-[21px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src={setting}
        />
      </div>
      <div className="relative rounded-26xl w-[219px] h-11">
        <div className="absolute top-[13.5px] left-[20px] w-[17px] h-[17px] overflow-hidden" />
        <div className="absolute top-[13px] left-[47px] leading-[18px] font-medium">
          Water and Effluents
        </div>
        <img
          className="absolute top-[10px] left-[189px] w-6 h-6 overflow-hidden"
          alt=""
          src={whitearrow}
        />
        <img
          className="absolute top-[10px] left-[17px] w-6 h-6 overflow-hidden"
          alt=""
          src={waterdrop}
        />
      </div>
    </div>
    <div className="relative bg-gray-400 box-border w-[249px] h-[178px] border-t-[1px] border-solid border-gray-300 border-b-[1px]">
      <div className="absolute top-[10px] left-[15px] rounded-26xl w-[219px] flex flex-row items-center justify-start py-[13px] pr-2.5 pl-5 box-border text-sm text-dimgray">
        <div className="relative w-[157px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] leading-[18px] uppercase font-medium">
            Analyze
          </div>
          <div className="absolute top-[-39px] left-[27px] w-[100px] h-[100px] overflow-hidden" />
        </div>
      </div>
      <div className="absolute top-[64px] left-[15px] rounded-3xs w-[219px] overflow-hidden flex flex-row items-center justify-start py-[13px] px-5 box-border gap-[10px]">
        <img
          className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
          alt=""
          src={setting}
        />
        <div className="relative leading-[18px] font-medium">
          Energy
        </div>
      </div>
      <div className="absolute top-[118px] left-[15px] rounded-26xl w-[219px] h-11">
        <img
          className="absolute top-[14px] left-[20px] w-4 h-4 overflow-hidden"
          alt=""
          src={deleteicon}
        />
        <div className="absolute top-[13px] left-[46px] leading-[18px] font-medium">
          Waste
        </div>
        <div className="absolute top-[15px] left-[95px] text-xs font-medium font-helveticaneue text-mediumseagreen-200 inline-block w-[81px] h-[11px]">
          (βeta)
        </div>
      </div>
    </div>
    <div className="relative w-[249px] h-[177px] text-center text-xs">
      <div className="absolute top-[63.5px] left-[31px] rounded-[11px] bg-mediumseagreen-200 w-[187px] h-[50px]" />
      <div className="absolute top-[78px] left-[64px] leading-[18px] font-medium inline-block w-[121px] h-9">
        Open Help Centre
      </div>
    </div>
    
  </div>
  );
};

export default SideBar;
