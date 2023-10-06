import Header from "./components/Header";
import { useState } from "react";
import ImageContent from "./components/ImageContent";

const App = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={`flex flex-col max-w-[1440px] mx-auto w-full h-screen`}>
      <Header MobileMenu={MobileMenu} setMobileMenu={setMobileMenu} />
      <ImageContent />
    </div>
  );
};

export default App;
