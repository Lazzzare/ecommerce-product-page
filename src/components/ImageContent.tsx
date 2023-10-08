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
const fullScreenImagesCloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
      fill="#FF7E1B"
    />
  </svg>
);

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
                <>
                  <div className="fixed bg-[#000] left-0 opacity-75 top-0 w-full h-screen z-[998]"></div>
                  <div className="absolute top-[20%] left-[35%] flex flex-col gap-y-10 justify-center mx-auto items-center z-[999]">
                    <div className="absolute items-center top-[38%]">
                      {/* PreviousImageClick */}
                      <div
                        onClick={() => handlePrevNext(-1)}
                        className="absolute right-[250px] bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer"
                      >
                        <img src={Previous} alt="Previous" />
                      </div>
                      {/* NextImageClick */}
                      <div
                        onClick={() => handlePrevNext(1)}
                        className="absolute left-[250px] bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer"
                      >
                        <img src={Next} alt="NextIcon" />
                      </div>
                    </div>
                    <img
                      src={image}
                      alt="image"
                      className="w-[550px] h-[550px] rounded-xl"
                    />
                    <div
                      onClick={() => setFullScreenImage(!fullScreenImage)}
                      className="absolute -top-10 right-0 cursor-pointer"
                    >
                      {fullScreenImagesCloseIcon}
                    </div>
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
                </>
              ) : null}
            </div>
          ))}
          {/* SubImages */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-row gap-x-7">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product${index + 1}`}
                  className={`w-[88px] h-[88px] rounded-lg hover:opacity-80 cursor-pointer ${
                    imageIndex === index
                      ? "border-2 border-[#FF7E1B] opacity-70"
                      : null
                  }`}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </motion.div>
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
