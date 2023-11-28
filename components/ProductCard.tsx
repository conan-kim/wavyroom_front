import RightArrowBlack from "@/assets/icons/RightArrowBlack.svg";
import RightArrowOrange from "@/assets/icons/RightArrowOrange.svg";
import { Button as CommonButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export interface ProductCardProps {
  name: string;
  value: string;
  image: any;
}

const ProductCard = ({ name, value, image }: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-4 pt-16 pb-8 md:px-8 md:pt-16 md:pb-8 lg:px-8 lg:pt-32 lg:pb-8 border-t border-r border-gray hover:bg-lightGray gap-[47px]">
      <Image src={image} alt="product_image" className="w-full h-full" />
      <div className="flex justify-between">
        <div className="text-black text-bodyLG">
          <p>
            {name} /<span className="text-midGray ml-[4px]"> 주거용 </span>
          </p>
          <span>{value}</span>
        </div>
        <Link href={`/model-detail?name=${name}`}>
          <CommonButton className="text-labelSM text-white bg-jetBlack md:text-jetBlack md:bg-gray" variant="secondary">
            주문하기{" "}
            <Image alt="right-arrow" src={RightArrowBlack} className="ml-[4px] hidden md:block" />
            <div className="block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <g clip-path="url(#clip0_2883_2016)">
                <path d="M10.02 4.35742L9.4875 4.88992L13.3425 8.74492H3.375V9.49492H13.35L9.4875 13.3574L10.0125 13.8824L14.7825 9.12742L10.02 4.35742Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2883_2016">
                <rect width="18" height="18" fill="white" transform="translate(0 0.120117)"/>
                </clipPath>
                </defs>
              </svg>
            </div>

          </CommonButton>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

export function ProductAllCard() {
  return (
    <div className="p-4 md:p-8 border-t border-r border-gray">
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-8 text-white  bg-offBlack">
      <p className="text-center text-[18px] md:text-[28px]">
        웨이비룸 모듈을 결합하여 다양한
        <br />
        형태의 공간 제작이 가능합니다.
      </p>
      <CommonButton
        className="px-4 py-2 bg-transparent !text-labelMD"
        variant="ghostOrange"
      >
        제품 전체보기{" "}
        <Image alt="right-arrow" src={RightArrowOrange} className="ml-[4px]" />
      </CommonButton>
    </div>
    </div>
  );
}
