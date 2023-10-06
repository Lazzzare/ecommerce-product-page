import { useState } from "react";
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Next from "../assets/icon-next.svg";
import Previous from "../assets/icon-previous.svg";

const ImageContent = () => {
  const [ProductImages, setProductImages] = useState(0);
  const [ImageIndex, setImageIndex] = useState(0);
  console.log("Image Index:", ImageIndex, "Product:", ProductImages);

  const NextImages = () => {
    if (ProductImages === 0) {
      setProductImages(ProductImages + 1);
      setImageIndex(ImageIndex + 1);
    } else {
      setProductImages(0);
      setImageIndex(0);
    }
  };
  const PreviousImages = () => {
    if (ProductImages === 0) {
      setProductImages(3);
      setImageIndex(3);
    } else {
      setProductImages(ProductImages - 1);
      setImageIndex(ImageIndex - 1);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex lg:hidden">
        <div className="relative items-center">
          {ProductImages === 0 ? <img src={Product1} alt="" /> : null}
          {ProductImages === 1 ? <img src={Product2} alt="" /> : null}
          {ProductImages === 2 ? <img src={Product3} alt="" /> : null}
          {ProductImages === 3 ? <img src={Product4} alt="" /> : null}
          <div
            onClick={PreviousImages}
            className="absolute left-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full"
          >
            <img src={Previous} alt="Previous" />
          </div>
          <div
            onClick={NextImages}
            className="absolute right-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full"
          >
            <img src={Next} alt="NextIcon" />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col space-y-8 pt-20 px-[213px]">
        <div className="">
          {ProductImages === 0 && ImageIndex === 0 ? (
            <img
              className="w-[445px] h-[445px] rounded-2xl"
              src={Product1}
              alt="Product1"
            />
          ) : null}
        </div>
        <div className="">
          {ProductImages === 1 && ImageIndex === 1 ? (
            <img
              className="w-[445px] h-[445px] rounded-2xl"
              src={Product2}
              alt="Product2"
            />
          ) : null}
        </div>
        <div className="">
          {ProductImages === 2 && ImageIndex === 2 ? (
            <img
              className="w-[445px] h-[445px] rounded-2xl"
              src={Product3}
              alt="Product3"
            />
          ) : null}
        </div>
        <div className="">
          {ProductImages === 3 && ImageIndex === 3 ? (
            <img
              className="w-[445px] h-[445px] rounded-2xl"
              src={Product4}
              alt="Product4"
            />
          ) : null}
        </div>
        {/* SubImages */}
        <div className="flex flex-row gap-x-7">
          <img
            src={Product1}
            alt="Product1"
            className="w-[88px] h-[88px] rounded-lg"
            onClick={() => {
              setImageIndex(0);
              setProductImages(0);
            }}
          />
          <img
            src={Product2}
            alt="Product2"
            className="w-[88px] h-[88px] rounded-lg"
            onClick={() => {
              setImageIndex(1);
              setProductImages(1);
            }}
          />
          <img
            src={Product3}
            alt="Product3"
            className="w-[88px] h-[88px] rounded-lg"
            onClick={() => {
              setImageIndex(2);
              setProductImages(2);
            }}
          />
          <img
            src={Product4}
            alt="Product4"
            className="w-[88px] h-[88px] rounded-lg"
            onClick={() => {
              setImageIndex(3);
              setProductImages(3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
