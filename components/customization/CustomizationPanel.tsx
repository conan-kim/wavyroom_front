"use client";
import React, { useState } from 'react';
import CloseIcone from "@/assets/icons/Close-icon.svg";
import Image from 'next/image';
import SelectColorCard from './SelectColorCard'
import CustomizationOptions, { CustomizationOptionsProps } from './CustomizationOptions'
import Select from "react-select";
import ModalProvider, { useModal } from 'mui-modal-provider';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

interface SimpleDialogProps extends DialogProps {
    title: string,
  };
  const SimpleDialog: React.FC<SimpleDialogProps> = ({ title, ...props }) => (
    <Dialog {...props}>
      <DialogTitle>
        <div className="flex justify-end"> 
         <Image src={CloseIcone} alt="icon"/>
        </div>
        <div className='text-[32px] font-light mx-8 pb-4 color=[#000]'> 
            <h1>도움이 필요하세요?</h1>
        </div>
        <div className='text-[14px] font-light mx-8 pb-8 color=[#4D4D4D] max-w-[60%]'>
            <p>어떤것을 도와드릴까요? 사소한 내용도 환영입니다. 
                문의를 주시면 연락을 드리겠습니다.</p>
        </div>
        <div className="flex justify-between px-8 py-8 bg-[#F9F9FA] rounded-lg mb-[8px]">
        <div>
            <div className='flex gap-[8px] mb-[8px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="black"/>
                </svg>
                <h1 className="text-[14px] font-medium color-[#000]">이메일 보내기</h1>
            </div>
            <p className="text-[12px] font-light color-[#6E6E73] max-w-[60%]">이메일을 선호하십니까? 스페이스웨이브 전문가가 영업일 기준
            하루 이내에 답변을 드리겠습니다.</p>
        </div>
        </div>
        <div className="flex justify-between  px-8 py-8 bg-[#F9F9FA] rounded-lg gap-2">
        <div>
        <div className='flex gap-[8px] mb-[8px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="black"/>
            </svg>
          <h1 className="text-[14px] font-medium color-[#000]">전화로 문의하기</h1>
        </div>
          <p className="text-[12px] font-light color-[#6E6E73]">월요일부터 토요일까지 오전 8시부터 오후 7시까지 가능한 <br></br>
          <span style={{ color: '#FF5B00' }}>(000) 000-0000</span>으로 전화주시기 바랍니다..</p>
        </div>
        </div>
      </DialogTitle>
    </Dialog>
  );

const CustomizationPanel = () => {
    const { showModal } = useModal();
    const [customizationOptions ,setCustomizationOptions] = useState<CustomizationOptionsProps[]>([
        {
            id:1,
            name:'형태',
            isMutliSelect:false,
            isExpanded:true,
            options:[
                {
                    option:'단층형',
                    isSelected:true
                },	
                {
                    option:'복층형',
                    isSelected:true
                },	
            ]
        },
        {
            id:2,
            name:'캐노피',
            isMutliSelect:false,
            isExpanded:true,
            options:[
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
            ]
        },
        {
            id:3,
            name:'데크',
            isMutliSelect:true,
            isExpanded:true,
            options:[
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
            ]
        },
        {
            id:4,
            name:'창문',
            isMutliSelect:false,
            isExpanded:true,
            options:[
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
            ]
        },
        {
            id:5,
            name:'창문',
            isMutliSelect:true,
            isExpanded:true,
            options:[
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
            ]
        },
        {
            id:6,
            name:'창문',
            isMutliSelect:false,
            isExpanded:true,
            options:[
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
                {
                    option:'리스트',
                    isSelected:true
                },	
            ]
        },
    ])

    const handleToggle=(id: number) => {
        setCustomizationOptions((prevOptions) => {
            return prevOptions.map((option) => {
              if (option.id === id) {
                return { ...option, isExpanded: !option.isExpanded };
              }

              return option;
            });
          });
    };

    const OPTIONS = [
        {value:'Evo1' ,label:'Evo'},
        {value:'Evo2' ,label:'Evo'},
        {value:'Evo3 ' ,label:'Evo'},
    ]

  return (
    <div className='flex flex-col h-[65vh] lg:h-[100vh] '>
        <section className='w-full overflow-y-scroll'>
            <div className="productName flex flex-col  gap-4 lg:gap-0  mx-[24px] md:mx-8 my-8" >
                <span className='text-[24px] lg:text-[32px] font-light items-center'>
                <Select
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        borderWidth: 0,
                        colors: {
                        ...theme.colors,
                        primary25: "none",
                        primary: "#ff5b00",
                        },
                    })}
                    isSearchable={false}
                    styles={{
                        container: (baseStyles: any, state: any) => ({
                        ...baseStyles,
                        ":focus": {

                        },
                        }),
                        control: (baseStyles: any) => ({
                            display:'flex',
                            height:'45px',

                        }),
                        indicatorSeparator: () => ({ display: "hidden" }),
                        valueContainer: (baseStyles: any) => ({
                        
                        }),
                        indicatorsContainer: (baseStyles:any) => ({
                            display:'flex',
                            alignItems:'center',
                        }),
                        option: (baseStyles:any) => ({
                            background:'#F7F7F7',
                            padding:'16px',
                            color:'black',
                            fontSize:'14px',
                            fontWeight:'500',
                            ":hover": {
                                backgroundColor: "#E5E5E5",
                                color: "black",
                            
                            },
                        }),
                    }}
                    options={OPTIONS}
                    value={OPTIONS[0]}
                    onChange={() => {}}
                    />
                </span>

                <span className='block lg:hidden'>
                    모듈러건축시스템 기반으로 {'웨이비룸'}이라는 주거공간을 만들고 있으며,<br />
                    {'공간의 제품화'}에 집중합니다.
                </span>
            </div>
            <div className="tabs flex mx-[24px] md:mx-8 mb-8">
                <div className="exteriorTab w-6/12">
                    <p className='text-[14px] md:text-[12px] border-b-[1px] border-jetBlack font-medium py-4'>외부</p>
                </div>
                <div className="interiroTab w-6/12">
                    <p className='text-[12px] border-b-[1px] font-medium py-4 text-midGray'>내부</p>
                </div>
            </div>
            <div className="selectColor mb-4">
                <SelectColorCard />
            </div>
            <div className="customOption">
                <CustomizationOptions customizationOptions={customizationOptions} handleToggle={handleToggle} />
            </div>
        </section>
        <div className="footer w-full">
            <section className='flex p-4 gap-2 items-center border-t-2'>
                <div className="download p-[11px] border-[1px] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10.666 8V10.6667H1.33268V8H0.666016V11.3333H11.3327V8H10.666Z" fill="#1C1C1F"/>
                        <path d="M9.23229 5.23268L8.76562 4.76602L6.33229 7.19268V0.666016H5.66562V7.19268L3.23229 4.76602L2.76562 5.23268L5.99896 8.47268L9.23229 5.23268Z" fill="#1C1C1F"/>
                    </svg>
                </div>
                <div className="export p-[11px] border-[1px] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path d="M7.99935 5V5.66667H10.666V13H1.33268V5.66667H3.99935V5H0.666016V13.6667H11.3327V5H7.99935Z" fill="#1C1C1F"/>
                        <path d="M5.66628 1.63938V8.99938H6.33294V1.63938L8.43294 3.73271L8.89961 3.26604L5.99961 0.359375L3.09961 3.26604L3.56628 3.73271L5.66628 1.63938Z" fill="#1C1C1F"/>
                    </svg>
                </div>
                <div className="customizeButton flex gap-[4px] px-4 py-[10px] text-white rounded-full justify-center w-full items-center bg-offBlack" onClick={() => showModal(SimpleDialog, { title: 'popup' })}>
                    <span className='text-[12px] font-medium'>커스텀하기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clipPath="url(#clip0_2583_274)">
                            <path d="M10.02 4.23828L9.4875 4.77078L13.3425 8.62578H3.375V9.37578H13.35L9.4875 13.2383L10.0125 13.7633L14.7825 9.00828L10.02 4.23828Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2583_274">
                                <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    </div>
  )
}

const container = document.getElementById('root');
const App=()=>(
    <ModalProvider>
      <CustomizationPanel />
    </ModalProvider>
  );
  export default App;