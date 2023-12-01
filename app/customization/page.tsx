"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomImg from "@/assets/customization/customization-banner-img.png";
import LeftArrow from "@/assets/icons/LeftArrowIcons.svg";
import Vector from '@/assets/icons/Vector.svg';
import IntentRequest from "@/assets/icons/intent-request--scale-out 1.svg"
import CustomItems from "@/components/customization/CustomItems";
import CustomizationPanel from "@/components/customization/CustomizationPanel";

const Customization = () => {
  const [navigateToSettings, setNavigateToSettings] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
    const [formElaments ,setFormElements] = useState({
        name:'',
        email:'',
        phone:''
    })
    
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    
    const handleFormElement = (e:any,value:string) => {
      debugger
      if(value==='name') {
        setFormElements((prev)=>({...prev,name:e.target.value}))
      }
      if(value==='email') {
        setFormElements((prev)=>({...prev,email:e.target.value}))
      }
      if(value==='phone') {
        setFormElements((prev)=>({...prev,phone:e.target.value}))
      }
      };

      const validateInputs = () => {
        if (!formElaments.name || !formElaments.email || !formElaments.phone) {
          setIsButtonDisabled(true);
        } else {
          setIsButtonDisabled(false);
        }
      };

        useEffect(()=> {
         validateInputs()
      },[formElaments])


  const moveToCustomSettings = (value: boolean) => {
    console.log(value)
    setNavigateToSettings(value)
  }

  const handlePopupOpen = () => {
    setShowOverlay(true);
  };
  const handlePopupClose = () => {
    setShowOverlay(false);
  };


return(
  <>
  <div className="flex flex-col lg:flex-row  max-w-[100vw] overflow-hidden h-[100vh]">
      <div className="w-full lg:w-[65%] bg-[#F9F9FA] flex flex-col h-[35vh] lg:h-full overflow-hidden">
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
      <div className="lg:w-[35%] md:w-full  h-[65vh] lg:h-full relative overflow-visible lg:overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 bottom-0 top-0 transition-transform duration-500 ease-out ${navigateToSettings ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
          <div className="absolute top-0 left-0  w-full">
            <CustomItems navigateToSettings={moveToCustomSettings}/>
          </div>
          <div className="absolute top-0 left-[100%] w-full">
            <CustomizationPanel handlePopupOpen={handlePopupOpen}  />
          </div>
        </div>

      </div>
      <div>
      </div>
  </div>
        {showOverlay && (
        <div id="overlay" className="fixed w-full h-full text-black bg-black bg-opacity-50" onClick={handlePopupClose}>
        <div id="text" className="absolute top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-lg sm:w-full md:w-fit" onClick={(e)=>{e.stopPropagation();
}}>
        <div className='lg:px-8 lg:py-8 px-[24px] pt-8 pb-4'>
        <div className='lg:text-[32px] text-[24px] font-light pb-[8px] color=[#000]'> 
            <h1>내가 만든 모델을 예약해보세요</h1>
        </div>
        <div className='lg:text-[14px] text-[12px] font-light pb-4 color=[#4D4D4D]'>
            <p>고객님의 정보를 입력하시면 이메일로 보내드리겠습니다.</p>
        </div>
        <div>
        <input
            className='lg:py-[24px] lg:text-[14px] py-4 text-[12] color=[#B2B2B2] w-full border-b-[1px] border-gray-500 mb-4'
            type='text'
            placeholder='이름을 입력하세요' 
            onChange={(e)=>{handleFormElement(e,'name')}}     
        />
      </div>

        <div>
        <input
            className='lg:py-[24px] lg:text-[14px] py-4 text-[12] color=[#B2B2B2]  w-full border-b-[1px] border-gray-500 mb-4'
            type='text'
            placeholder='이메일 주소를 입력하세요'     
            onChange={(e)=>{handleFormElement(e,'email')}}     
        />
      </div>

        <div>
        <input
            className='lg:py-[24px] lg:text-[14px] py-4 text-[12] color=[#B2B2B2]  w-full border-b-[1px] border-gray-500 mb-16'
            type='text'
            placeholder='휴대전화번호를 입력하세요' 
            onChange={(e)=>{handleFormElement(e,'phone')}}     
        />
      </div>

        <div className="flex justify-center items-center gap-2">
          <div className="w-[42px] h-[42px] p-[11px] border-[1px] rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_3111_49040)">
            <path d="M14.6337 8.62505H4.65875L8.51375 4.77005L7.98875 4.23755L3.21875 9.00755L7.98875 13.7625L8.51375 13.2375L4.65125 9.37505H14.6337V8.62505Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_3111_49040">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
        <button
      className={`flex justify-center items-center gap-1 w-full text-white py-[10px] px-4 text-[12px] font-medium rounded-full ${isButtonDisabled ? 'bg-gray' : 'bg-jetBlack'}`}>
    <span>
            완료
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clipPath="url(#clip0_2619_2241)">
              <path d="M10.02 4.23828L9.4875 4.77078L13.3425 8.62578H3.375V9.37578H13.35L9.4875 13.2383L10.0125 13.7633L14.7825 9.00828L10.02 4.23828Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_2619_2241">
                <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
            </button>
            </div>
        </div>
        </div>
        </div>
       )} 

  </>
)
};

export default Customization;