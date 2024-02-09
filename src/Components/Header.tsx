import { IoIosArrowRoundBack } from "react-icons/io";
import { PiLockFill } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";

function Header() {
  return (
    <div>
      <div className="flex flex-row justify-around items-center w-full p-3">
        <IoIosArrowRoundBack className="w-8 h-8 text-gray-600" />
        <p className="flex flex-row text-gray-400 items-center font-medium gap-2">
          <PiLockFill className="w-5 h-5" />
          Checkout
        </p>
        <GoQuestion className="w-5 text-gray-600 h-5" />
      </div>
      <div className="flex justify-center items-center font-roboto w-full h-10 bg-black text-white">
        Holding your tickets for 30:00
      </div>
    </div>
  );
}

export default Header;
