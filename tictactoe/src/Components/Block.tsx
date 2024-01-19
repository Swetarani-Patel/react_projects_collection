import React from "react";
interface blockprops {
  value?: string | null;
  onClick?: () => void;
}

const Block: React.FC<blockprops> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="h-[100px] w-[100px] flex justify-center items-center text-4xl font-bold bg-[#f4f0e9] text-black"
    >
      {props.value}
    </div>
  );
};

export default Block;
