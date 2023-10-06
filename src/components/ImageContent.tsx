import React, { useState } from "react";
import Next from "../assets/icon-next.svg";
import Previous from "../assets/icon-previous.svg";
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import Cart from "../assets/icon-cart.svg";

const productImages = [Product1, Product2, Product3, Product4];

const ImageContent: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [amount, setAmount] = useState(0);
  const imageSrc = productImages[imageIndex];

  const handleImageChange = (index: number) => {
    setImageIndex(index);
  };

  const handlePrevNext = (increment: number) => {
    setImageIndex(
      (prevIndex) =>
        (prevIndex + increment + productImages.length) % productImages.length
    );
  };

  return (
    <div className="flex flex-col lg:flex-row  lg:items-center">
      <div className="flex lg:hidden">
        <div className="relative items-center">
          <img src={imageSrc} alt="" />
          <div
            onClick={() => handlePrevNext(-1)}
            className="absolute left-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full"
          >
            <img src={Previous} alt="Previous" />
          </div>
          <div
            onClick={() => handlePrevNext(1)}
            className="absolute right-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full"
          >
            <img src={Next} alt="NextIcon" />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col space-y-8 pt-20 px-[213px]">
        {productImages.map((image, index) => (
          <div key={index} className={index === imageIndex ? "" : "hidden"}>
            <img
              className="w-[450px] h-[450px] rounded-2xl"
              src={image}
              alt={`Product${index + 1}`}
            />
          </div>
        ))}
        {/* SubImages */}
        <div className="flex flex-row gap-x-7">
          {productImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product${index + 1}`}
              className="w-[88px] h-[88px] rounded-lg"
              onClick={() => handleImageChange(index)}
            />
          ))}
        </div>
      </div>
      {/* TextContent */}
      <div className="p-6">
        <div>
          <h3 className="text-[#FF7E1B] text-xs font-bold tracking-[1.846px] uppercase">
            Sneaker Company
          </h3>
          <h1 className="mt-5 text-[#1D2026] text-[28px] font-bold leading-8">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-4 text-[#69707D] text-[15px] leading-[25px] w-[327px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        {/* PriceContent */}
        <div className="flex w-full flex-col">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <h1 className="text-[#1D2026] text-[28px] font-bold">$125.00</h1>
              <span className="bg-[#FFEEE2] text-[#FF7E1B] font-bold w-[51px] h-[27px] flex justify-center items-center rounded-md">
                50%
              </span>
            </div>
            <h2 className="text-[#B6BCC8] font-bold leading-[26px] line-through">
              $250.00
            </h2>
          </div>
          <div className="mt-7 w-full h-[56px] bg-[#F6F8FD] rounded-[10px] flex flex-row items-center justify-between px-4">
            <img
              onClick={() => {
                if (amount === 0) {
                  return;
                } else {
                  setAmount(amount - 1);
                }
              }}
              src={Minus}
              alt="Minus"
              className="cursor-pointer"
            />
            <h2 className="text-[#1D2026] font-bold">{amount}</h2>
            <img
              onClick={() => setAmount(amount + 1)}
              src={Plus}
              alt="Plus"
              className="cursor-pointer"
            />
          </div>
          {/* Button */}
          <div className="mt-4 cursor-pointer text-white w-full pt-[22px] pb-[18px] bg-[#FF7E1B] rounded-[10px] flex justify-center items-center space-x-4">
            <img src={Cart} alt="Cart" />
            <h2>Add to cart</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
