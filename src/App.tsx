import Header from "./components/Header";
import { useState } from "react";
import ImageContent from "./components/ImageContent";

const App = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);
  const [cartButtonClicked, setCartButtonClicked] = useState(false);

  const cartButton = (): boolean => {
    return amount > 0;
  };

  return (
    <div className={`flex flex-col max-w-[1440px] mx-auto w-full h-screen`}>
      <Header
        MobileMenu={MobileMenu}
        setMobileMenu={setMobileMenu}
        amount={amount}
        setAmount={setAmount}
        cartButton={cartButton}
        cartButtonClicked={cartButtonClicked}
        setCartButtonClicked={setCartButtonClicked}
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
  );
};

export default App;
