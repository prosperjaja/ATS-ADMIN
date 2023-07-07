import React from "react";
import Image from "next/image";

export const AddButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler;
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center gap-2 bg-[#38CB89] p-1.5 px-[clamp(1.25rem,3vw,2.5rem)] text-[14px] rounded-lg"
      >
        <Image src={"/images/Add.png"} alt="add" width={18} height={18} />
        <p className="text-white ">{text}</p>
      </button>
    </div>
  );
};
