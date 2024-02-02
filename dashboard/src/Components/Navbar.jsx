import React from "react";
import Vector from "../assets/Vector.png";
import circle from "../assets/circle.png";
import dropdown from "../assets/dropdown.png";
import profileimg from "../assets/profileimg.png";
const Navbar = () => {
  return (
    <div className="absolute top-[0px] left-[240px] w-[1200px] h-16 flex flex-row items-center justify-between py-0 px-5 box-border text-base">
      <div className="absolute my-0 mx-[!important] top-[63.5px] left-[-0.5px] box-border w-[1377px] h-px z-[0] border-t-[1px] border-solid border-mediumseagreen-300" />
      <div className="h-16 flex flex-row items-center justify-start gap-[12px] z-[1]">
        <div className="rounded-lg bg-white box-border w-8 h-8 flex flex-row items-center justify-center border-[1px] border-solid border-whitesmoke">
          <img className="relative w-5 h-5" alt="" src={circle} />
        </div>
        <h3 className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.84),_rgba(0,_0,_0,_0.84)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Category-1
        </h3>
      </div>
      <div className="bg-mediumseagreen-400 h-14 flex flex-row items-center justify-start py-2 px-4 box-border gap-[10px] z-[2] text-center text-4xs">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative rounded-[50%] w-8 h-8 object-cover"
            alt=""
            src={profileimg}
          />
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={dropdown}
        />
        <div className="rounded-lg bg-white box-border w-10 h-10 flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-whitesmoke">
          <div className="relative w-6 h-6">
            <img
              className="absolute h-[86.58%] w-9/12 top-[8.33%] right-[12.5%] bottom-[5.08%] left-[12.5%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src={Vector}
            />
            <div className="absolute h-[58.33%] w-[58.33%] top-[-8.33%] right-[-8.33%] bottom-[50%] left-[50%] rounded-3xl [background:linear-gradient(#ea7e7e,_#ea7e7e),_#fff] flex flex-col items-center justify-center p-0.5 box-border">
              <h3 className="relative font-medium text-white text-[9px]">1</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
