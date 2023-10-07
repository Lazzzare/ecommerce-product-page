import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  amount: number;
  setAmount: (e: number) => void;
  cartButton: () => void;
  cartButtonClicked: boolean;
  setCartButtonClicked: (e: boolean) => void;
}

const TextContent = ({
  amount,
  setAmount,
  cartButton,
  //   cartButtonClicked,
  setCartButtonClicked,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 pt-6 lg:p-6">
        <div>
          <h3 className="text-[#FF7E1B] text-xs lg:text-[13px] font-bold tracking-[1.846px] lg:tracking-[2px] uppercase">
            Sneaker Company
          </h3>
          <h1 className="mt-5 lg:mt-7 text-[#1D2026] text-[28px] lg:text-[44px] font-bold leading-8 lg:leading-[48px]">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-4 lg:mt-8 text-[#69707D] text-[15px] lg:text-base leading-[25px] w-[327px] lg:w-[445px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        {/* PriceContent */}
        <div className="flex w-full flex-col lg:mt-7">
          <div className="flex flex-row lg:flex-col justify-between items-center w-full">
            <div className="flex gap-4 items-center lg:w-full">
              <h1 className="text-[#1D2026] text-[28px] font-bold">$125.00</h1>
              <span className="bg-[#FFEEE2] text-[#FF7E1B] font-bold w-[51px] h-[27px] flex justify-center items-center rounded-md">
                50%
              </span>
            </div>
            <h2 className="text-[#B6BCC8] font-bold leading-[26px] line-through lg:w-full">
              $250.00
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
            <div className="mt-7 lg:mt-4 w-full lg:w-[157px] h-[56px] bg-[#F6F8FD] rounded-[10px] flex flex-row items-center justify-between px-4">
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
            <div
              onClick={() => {
                cartButton;
                setCartButtonClicked(true);
              }}
              className="mt-4 cursor-pointer text-white w-full lg:w-[272px] pt-[22px] pb-[18px] lg:py-0 lg:h-[56px] bg-[#FF7E1B] rounded-[10px] flex justify-center items-center space-x-4"
            >
              <AiOutlineShoppingCart className="w-5 h-5 text-white" />
              <h2 className="text-white font-bold">Add to cart</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TextContent;
