import gallery from "../assets/gallery.webp";
import BestsellerTag from "./BestsellerTag";

import { MdOutlineStarHalf } from "react-icons/md";
import { PiTicketFill } from "react-icons/pi";
import { PiCalendarBlankFill } from "react-icons/pi";
import { HiClock } from "react-icons/hi2";
import { FaUserGroup } from "react-icons/fa6";
import { PiPiggyBankFill } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

function ConfirmCard() {
  return (
    <div className="flex flex-col px-4 py-12">
      <h1 className="text-4xl font-semibold ">Confirm & pay</h1>
      <div className="flex-col flex mt-7 px-4 py-2 border border-gray-300 rounded-3xl">
        <div className="relative">
          <img
            src={gallery}
            alt="destination"
            className="object-cover rounded-3xl h-56 w-full mt-2 shadow-xl"
          />
          <div className="absolute top-5 left-4">
            <BestsellerTag />
          </div>
          <div className="mt-4 gap-1 flex flex-row items-center">
            <MdOutlineStarHalf
              style={{ color: "orange" }}
              className="h-5 w-5"
            />
            <p className="font-semibold">
              4.9{" "}
              <span className="font-normal text-gray-500">
                (4.5k) • &lt;category&gt;
              </span>
            </p>
          </div>
          <h1 className="text-xl font-semibold font-roboto">
            Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
            Housef
          </h1>
          <div className="flex flex-col  mt-3 gap-1">
            <div className="flex gap-2 items-center">
              <PiTicketFill className="h-6 w-6" />
              <p className="font-medium text-xl">
                &lt;ticket type - variant&gt;
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <PiCalendarBlankFill className="h-6 w-6" />
              <div className="mt-3">
                <p className="font-medium text-xl">
                  &lt;day&gt; &lt;month&gt; &lt;date&gt;
                </p>
                <p className="text-gray-500">Duration: &lt;duration&gt;</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <HiClock className="h-6 w-6" />
              <div className="mt-3">
                <p className="font-medium text-xl">&lt;time&gt;</p>
                <p className="text-gray-500">
                  Operating hours: &lt;time&gt; to &lt;time&gt;
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <FaUserGroup className="h-6 w-6" />
              <p className="font-medium text-xl">5 guests</p>
            </div>
          </div>
          <p className="mt-2 text-gray-300 w-full">
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>
          <div className="mt-2 flex flex-row items-center justify-between">
            <u className="font-roboto text-gray-400 text-lg">
              View payment summary
            </u>
            <FiPlus className="text-gray-500 h-5 w-5" />
          </div>
        </div>
        <br className="text-gray-400" style={{ height: "1px" }} />
        <div className="mt-4 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">Total payable </h1>
            <p className="bg-green-200 flex items-center gap-1 text-green-700 font-semibold px-2 py-1 rounded-full text-[12px] w-36 ">
              <PiPiggyBankFill /> You saved: &lt;price&gt;
            </p>
            <u className="mt-4 text-gray-400 flex gap-2 items-center">
              You will be charged in AED
              <CiCircleInfo />
            </u>
          </div>
          <div className="-mt-[70px] font-bold text-xl">$XXX</div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCard;
