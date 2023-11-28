import ImageNova from "@/assets/Products/Nova.svg";
import SidebarProduct from "@/assets/Products/SidebarProduct.png";
import ProductCard, { ProductAllCard } from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import { Button as CommonButton } from "@/components/ui/button";
import Image from "next/image";
import Label from "../components/Label";

const Home = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="md:px-8 md:pb-8 lg:pb-16">
        <div className="relative w-full aspect-[1376/744]">
          <Image
            layout="fill"
            objectFit="cover"
            src={SidebarProduct}
            alt="Main Image"
          />
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 md:py-8 lg:px-8 lg:py-16">
        <Label>웨이비룸</Label>
        <h1 className="font-light text-displaySM md:text-displayMD lg:text-displayLG my-2 ml-[-1px]">
          간편하게 주문하고 <br /> 품질 높은 공간을 받아보세요
        </h1>
        <p className="font-light text-bodySM md:text-[14px] lg:text-bodyLG mb-8">
          나에게 맞는 모델을 선택하여 나만의 공간을 만들어 보세요
        </p>
        <div className="button px-4 py-2 flex justify-center gap-[4px] bg-jetBlack rounded-full text-[12px] text-white w-fit">
          <span>주문하기</span>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g clip-path="url(#clip0_2883_11)">
            <path d="M10.02 4.2373L9.4875 4.7698L13.3425 8.6248H3.375V9.3748H13.35L9.4875 13.2373L10.0125 13.7623L14.7825 9.0073L10.02 4.2373Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_2883_11">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-4 md:pt-16 md:pb-8 lg:pt-24 lg:pb-16">
        <ProductCarousel />
      </section>
      <section className="px-4 py-8 md:px-8 md:py-8 lg:px-8 lg:py-16">
        <Label>우리의 비전</Label>
        <h1 className="font-light text-displaySM md:text-displayMD lg:text-displayLG mt-2">
          혁신적인 제품으로 <br /> 재탄생하다
        </h1>
      </section>
      <section className="grid w-full grid-cols-1 lg:grid-cols-2">
        <ProductCard image={ImageNova} name="Nova" value="100,000,000원~" />
        <ProductCard image={ImageNova} name="Evo" value="78,000,000원~" />
        <ProductCard image={ImageNova} name="Max" value="65,000,000원~" />
        <ProductCard image={ImageNova} name="Studio" value="46,000,000원~" />
        <ProductCard image={ImageNova} name="Mini" value="35,000,000원~" />
        <ProductAllCard />
      </section>
    </main>
  );
};

export default Home;
