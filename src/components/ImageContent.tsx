import { useState } from "react";
import Next from "../assets/icon-next.svg";
import Previous from "../assets/icon-previous.svg";
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import { motion } from "framer-motion";
import TextContent from "./TextContent";

interface Props {
  setFullScreenImage: (e: boolean) => void;
  fullScreenImage: boolean;
  amount: number;
  setAmount: (e: number) => void;
  cartButton: () => boolean;
  cartButtonClicked: boolean;
  setCartButtonClicked: (e: boolean) => void;
}

const productImages = [Product1, Product2, Product3, Product4];

const ImageContent = ({
  fullScreenImage,
  setFullScreenImage,
  amount,
  setAmount,
  cartButton,
  cartButtonClicked,
  setCartButtonClicked,
}: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
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
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative items-center">
            {/* MainMobileImage */}
            <img src={imageSrc} alt="image" />
            {/* PreviousImageClick */}
            <div
              onClick={() => handlePrevNext(-1)}
              className="absolute left-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
            >
              <img src={Previous} alt="Previous" />
            </div>
            {/* NextImageClick */}
            <div
              onClick={() => handlePrevNext(1)}
              className="absolute right-4 top-1/2 bg-white w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
            >
              <img src={Next} alt="NextIcon" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hidden lg:flex flex-col gap-y-8 pt-20 px-[213px]">
          {productImages.map((image, index) => (
            <div key={index} className={index === imageIndex ? "" : "hidden"}>
              <img
                className="max-w-[450px] max-h-[450px] rounded-2xl cursor-pointer"
                src={image}
                alt={`Product${index + 1}`}
                onClick={() => setFullScreenImage(true)}
              />
              {fullScreenImage ? (
                <div className="absolute top-[30%] left-[35%] flex justify-center mx-auto items-center bg-red-400">
                  <img
                    src={image}
                    alt="image"
                    className="w-[550px] h-[550px]"
                  />
                </div>
              ) : null}
            </div>
          ))}
          {/* SubImages */}
          <div className="flex flex-row gap-x-7">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product${index + 1}`}
                className={`w-[88px] h-[88px] rounded-lg cursor-pointer ${
                  imageIndex === index
                    ? "border-2 border-[#FF7E1B] opacity-50"
                    : null
                }`}
                onClick={() => handleImageChange(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* TextContent */}
      <TextContent
        amount={amount}
        setAmount={setAmount}
        cartButton={cartButton}
        cartButtonClicked={cartButtonClicked}
        setCartButtonClicked={setCartButtonClicked}
      />
    </div>
  );
};

export default ImageContent;
