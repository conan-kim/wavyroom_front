"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LeftArrow from "@/assets/icons/LeftArrowIcons.svg";
import Vector from '@/assets/icons/Vector.svg';
import IntentRequest from "@/assets/icons/intent-request--scale-out 1.svg"
import CustomItems from "@/components/customization/CustomItems";
import CustomizationPanel from "@/components/customization/CustomizationPanel";
import Link from "next/link";

import CardImg1 from "@/assets/custom-card/product-img2.png";
import CardImg2 from "@/assets/custom-card/product-img1.png";
import CardImg3 from "@/assets/custom-card/product-img3.png";
import CardImg4 from "@/assets/custom-card/product-img4.png";
import CardImg5 from "@/assets/custom-card/product-img5.png";

export interface Product {
  id: number;
  heading:string;
  subheading:string;
  price:string;
  Image:any;
}

const Customization = () => {
  const [navigateToSettings, setNavigateToSettings] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedItem, setSelectedTtem] = useState<number>(1);

  const [products] = useState<Product[]>([
    { id: 1,
      heading:'Evo',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg1,
   },
   {  id: 2  ,
      heading:'Nova',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg2,
   },
   { 
      id: 3,  
      heading:'Max',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg3,
    },
    { 
      id:4,
      heading:'Studio',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg4,
    },
    { 
      id: 5,
      heading:'Mini',
      subheading:'10평',
      price:"￦35,000,000~",
       Image:CardImg5,
    },
    { 
      id: 6,
      heading:'Mini',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg5,
    },
    { 
      id: 7,
      heading:'Mini',
      subheading:'10평',
      price:"￦35,000,000~",
      Image:CardImg5,
    },
  ])
  const [selectedImage,setSelectedImage] = useState(products.find(x=>x.id===selectedItem)?.Image);


  const handleSelectedItem = (id:number)=>{
   setSelectedTtem(id);
  }
  useEffect(()=>{
    setSelectedImage(products.find(x=>x.id === selectedItem)?.Image);
  },[selectedItem])

  const moveToCustomSettings = (value: boolean) => {
    setNavigateToSettings(value)
  }

  const handleMenuToggle = () => {
    setOpenMenu((prev) => !prev)
  }

return(
  <div className="flex flex-col lg:flex-row  max-w-[100vw] overflow-hidden h-[100vh]">
      <div className={`w-full lg:w-[65%] bg-[#F9F9FA] flex flex-col h-[35vh] lg:h-full overflow-hidden ${openMenu ? 'bg-[#00000080]' :''} `} onClick={openMenu ? handleMenuToggle : () => {}}>
        <div className="flex pt-[24px]  lg:pt-8 pl-[24px]  lg:pl-8 pb-[20px] lg:pb-[24px] gap-[8px]"> 
            <Link href='/'>
              <Image  src={LeftArrow} alt='leftarrow' />
            </Link>
            <Image className="mx-[2px] my-[2px]" src={Vector} alt='vector'/>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center  mb-4  max-h-fit">
           <Image className={`max-h-[205px] ${openMenu ? 'opacity-50' :''}`} src={selectedImage} alt="img"/> 
          </div>
          <div className="flex lg:flex-col items-center justify-center pb-8 gap-[12px] lg:gap-[20px] lg:text-[14px] md:text-sm">
            <Image src={IntentRequest} alt="icon"/>
            <p>모델을 마우스로 드래그하여 구성을 회전하세요 </p>
          </div>
      </div>
      <div className="lg:w-[35%] md:w-full  h-[65vh] lg:h-full relative overflow-visible lg:overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 bottom-0 top-0 transition-transform duration-500 ease-out ${navigateToSettings ? 'translate-x-[-100%]' : 'translate-x-0'}`}>
          <div className="absolute top-0 left-0  w-full">
            <CustomItems navigateToSettings={moveToCustomSettings} products={products} selectedItem={selectedItem} handleSelectedItem={handleSelectedItem} />
          </div>
          <div className="absolute top-0 left-[100%] w-full">
            <CustomizationPanel handleMenuToggle={handleMenuToggle}  openMenu={openMenu} />
          </div>
        </div>

      </div>
  </div>
)
};

export default Customization;