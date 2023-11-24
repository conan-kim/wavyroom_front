"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomImg from "@/assets/customization/image.png";
import LeftArrow from "@/assets/icons/LeftArrowIcons.svg";
import Vector from '@/assets/icons/Vector.svg';
import IntentRequest from "@/assets/icons/intent-request--scale-out 1.svg"
import CustomItems from "@/components/customization/CustomItems";
import CustomizationPanel from "@/components/customization/CustomizationPanel";

const Customization = () => {
  const [navigateToSettings, setNavigateToSettings] = useState(false);

  const moveToCustomSettings = (value: boolean) => {
    console.log(value)
    setNavigateToSettings(value)
  }

return(
  <div className="flex flex-col lg:flex-row  max-w-[100vw] overflow-hidden h-[100vh]">
      <div className="w-full lg:w-[65%] bg-[#F9F9FA] flex flex-col h-[390px] lg:h-full overflow-hidden">
        <div className="flex pt-[24px]  lg:pt-8 pl-[24px]  lg:pl-8 pb-[20px] lg:pb-[24px] gap-[8px]"> 
            <Image src={LeftArrow} alt='leftarrow' />
            <Image className="mx-[2px] my-[2px]" src={Vector} alt='vector'/>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center  mb-4  max-h-fit">
           <Image className="max-h-[205px]" src={CustomImg} alt="img"/> 
          </div>
          <div className="flex lg:flex-col items-center justify-center pb-8 gap-[12px] lg:gap-[20px] lg:text-[14px] md:text-sm">
            <Image src={IntentRequest} alt="icon"/>
            <p>모델을 마우스로 드래그하여 구성을 회전하세요 </p>
          </div>
        </div>
      <div className="lg:w-[35%] md:w-full  h-[calc(100vh-390px)] lg:h-full relative overflow-visible lg:overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 bottom-0 top-0 transition-transform duration-500 ease-out ${navigateToSettings ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
          <div className="absolute top-0 left-0  w-full">
            <CustomItems navigateToSettings={moveToCustomSettings}/>
          </div>
          <div className="absolute top-0 left-[100%] w-full">
            <CustomizationPanel  />
          </div>
        </div>

      </div>
  </div>
)
};

export default Customization;