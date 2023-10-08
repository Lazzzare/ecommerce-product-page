import IconMenu from "../assets/icon-menu.svg";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/image-avatar.png";
import Close from "../assets/icon-close.svg";
import Delete from "../assets/icon-delete.svg";
import BuyProduct from "../assets/image-product-1.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

interface Props {
  MobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
  amount: number;
  setAmount: (e: number) => void;
  cartButton: (hasItems: boolean) => boolean;
  cartButtonClicked: boolean;
  setCartButtonClicked: (e: boolean) => void;
  menuItemsArray: string[];
}

const Header = ({
  MobileMenu,
  setMobileMenu,
  amount,
  setAmount,
  cartButton,
  cartButtonClicked,
  setCartButtonClicked,
  menuItemsArray,
}: Props) => {
  const [cartMenu, setCartMenu] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between px-6 lg:px-[165px] pt-5 lg:pt-11 pb-7 lg:pb-11">
        {/* LeftSide */}
        <div className="flex gap-4 items-center">
          {MobileMenu ? (
            <img
              onClick={() => setMobileMenu(!MobileMenu)}
              src={Close}
              alt="Close"
              className={`lg:hidden cursor-pointer ${
                MobileMenu ? "z-[1000]" : null
              }`}
            />
          ) : (
            <img
              onClick={() => setMobileMenu(!MobileMenu)}
              src={IconMenu}
              alt="IconMenu"
              className="lg:hidden cursor-pointer"
            />
          )}
          <div className="flex flex-row items-center gap-x-14">
            <img src={Logo} alt="Logo" className="cursor-pointer" />
            <ul className="hidden lg:flex gap-8">
              {menuItemsArray.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="relative cursor-pointer text-[#69707D] leading-6"
                  >
                    <a>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* RightSIde */}
        <div className="flex flex-row items-center gap-5 relative">
          <AiOutlineShoppingCart
            onClick={() => setCartMenu(!cartMenu)}
            className="w-6 h-6 text-[#69707D] cursor-pointer"
          />
          {cartButtonClicked ? (
            cartButton(amount > 0) ? (
              <div className="absolute top-2 right-14 bg-[#FF7E1B] rounded-md text-[10px] font-bold text-white w-[19px] h-[13px] items-center flex justify-center">
                {amount}
              </div>
            ) : null
          ) : null}
          {cartMenu ? (
            // CartMenu
            <div className="cart_menu z-10 absolute lg:top-16 lg:-left-40 top-20 -left-[275px] w-[360px] h-[256px]">
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="p-6 text-[#1D2026] font-bold">Cart</h2>
                  <hr className="h-[1px] text-[#E4E9F2]" />
                  {cartButtonClicked ? (
                    cartButton(amount > 0) === true ? (
                      <div className="p-4 items-center justify-center">
                        <div className="flex flex-row">
                          <img
                            src={BuyProduct}
                            alt="BuyProduct"
                            className="w-[50px] h-[50px] rounded"
                          />
                          <div className="ml-4">
                            <h2 className="text-[#69707D] leading-[26px]">
                              Fall Limited Edition Sneakers
                            </h2>
                            <div className="flex flex-row gap-1">
                              <h3 className="text-[#69707D] leading-[26px]">
                                $125.00 x {amount}
                              </h3>
                              <h4 className="text-[#1D2026] font-bold leading-[26px]">
                                {`${125 * amount}.00 $`}
                              </h4>
                            </div>
                          </div>
                          <img
                            src={Delete}
                            alt="Delete"
                            className="w-[14px] h-[16px] mt-4 ml-5 cursor-pointer"
                            onClick={() => {
                              setCartButtonClicked(!cartButton);
                              setAmount(0);
                            }}
                          />
                        </div>
                        <div className="items-center mx-auto flex justify-center mt-6">
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: `You Buy ${amount} Sneakers Product`,
                                width: 600,
                                padding: "3em",
                                color: "#edebeb",
                                background: `url(https://media.tenor.com/T9seei18FiYAAAAC/cowboy-boots-rattlesnake-boots.gif) center no-repeat`,
                                backdrop: `
                                  rgba(0, 0, 0, 0.4)
                                  left top
                                  no-repeat
                                `,
                              });
                              setCartButtonClicked(false);
                              setAmount(0);
                            }}
                            className="w-full bg-[#FF7E1B] rounded-[10px] text-white font-bold pt-[18px] pb-[18px] hover:bg-[#d37f3f]"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <h1
                        className="absolute flex justify-center items-center mx-auto top-1/2 left-[30%]
                      text-[#69707D] font-bold leading-7"
                      >
                        Your cart is empty.
                      </h1>
                    )
                  ) : (
                    <h1
                      className="absolute flex justify-center items-center mx-auto top-1/2 left-[30%]
                      text-[#69707D] font-bold leading-7"
                    >
                      Your cart is empty.
                    </h1>
                  )}
                </div>
              </motion.div>
            </div>
          ) : null}
          <img
            src={Avatar}
            alt="Avatar"
            className="w-6 h-6 lg:w-12 lg:h-12 hover:border-2 hover:border-[#FF7E1B] hover:rounded-full cursor-pointer"
          />
        </div>
      </div>
      <hr className="hidden lg:flex max-w-[1110px] w-full mx-auto bg-black" />
    </>
  );
};

export default Header;
