import Header from "./components/Header";
import { useState } from "react";
import ImageContent from "./components/ImageContent";

const App = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);
  const [cartButtonClicked, setCartButtonClicked] = useState(false);

  const menuItemsArray = ["Collections", "Men", "Women", "About", "Contact"];

  const cartButton = (): boolean => {
    return amount > 0;
  };

  return (
    <>
      <div className={`flex flex-col max-w-[1440px] mx-auto w-full h-screen`}>
        <Header
          MobileMenu={MobileMenu}
          setMobileMenu={setMobileMenu}
          amount={amount}
          setAmount={setAmount}
          cartButton={cartButton}
          cartButtonClicked={cartButtonClicked}
          setCartButtonClicked={setCartButtonClicked}
          menuItemsArray={menuItemsArray}
        />
        <ImageContent
          fullScreenImage={fullScreenImage}
          setFullScreenImage={setFullScreenImage}
          amount={amount}
          setAmount={setAmount}
          cartButton={cartButton}
          cartButtonClicked={cartButtonClicked}
          setCartButtonClicked={setCartButtonClicked}
        />
      </div>
      {MobileMenu ? (
        <>
          <div className="fixed lg:hidden bg-[#000] left-0 opacity-75 top-0 w-full h-screen z-[998]"></div>
          <div className="fixed lg:hidden bg-white top-0 left-0 w-[300px] h-screen z-[999]">
            <div className="header fixed m-0 w-[300px] h-full bg-white">
              <ul className="absolute top-20 left-[25px] space-y-5">
                {menuItemsArray.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer text-[#1D2026] leading-6 font-bold text-lg"
                    >
                      <a>{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default App;
