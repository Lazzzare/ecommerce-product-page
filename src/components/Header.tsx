import IconMenu from "../assets/icon-menu.svg";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Close from "../assets/icon-close.svg";

interface Props {
  MobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
}

const Header = ({ MobileMenu, setMobileMenu }: Props) => {
  const menuItemsArray = ["Collections", "Men", "Women", "About", "Contact"];
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
              className="lg:hidden cursor-pointer z-10"
            />
          ) : (
            <img
              onClick={() => setMobileMenu(!MobileMenu)}
              src={IconMenu}
              alt="IconMenu"
              className="lg:hidden cursor-pointer"
            />
          )}
          {MobileMenu ? (
            <div className="lg:hidden absolute left-0 top-0 w-[250px] h-screen bg-slate-300">
              <ul className="mt-[90px] ml-6 flex flex-col gap-8">
                {menuItemsArray.map((item) => {
                  return (
                    <li className="cursor-pointer text-[#1D2026] font-bold leading-6">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          <div className="flex flex-row items-center gap-x-14">
            <img src={Logo} alt="Logo" className="cursor-pointer" />
            <ul className="hidden lg:flex gap-8">
              {menuItemsArray.map((item) => {
                return (
                  <li className="cursor-pointer text-[#69707D] hover:text-[#1D2026] leading-6">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* RightSIde */}
        <div className="flex flex-row items-center gap-5">
          <img src={Cart} alt="CartIcon" />
          <img src={Avatar} alt="Avatar" className="w-6 h-6 lg:w-12 lg:h-12" />
        </div>
      </div>
      <hr className="hidden lg:flex max-w-[1110px] w-full mx-auto bg-black" />
    </>
  );
};

export default Header;
