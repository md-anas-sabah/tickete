import { BsInfoCircleFill } from "react-icons/bs";
import { PiPiggyBankFill } from "react-icons/pi";

function Amount() {
  return (
    <div className="flex flex-col mt-14 gap-4">
      <p className="bg-green-100 flex items-center justify-center gap-1 sm:hidden text-green-500 border border-green-600 font-semibold rounded-full h-6 text-[11px] w-32">
        <PiPiggyBankFill /> You saved: &lt;price&gt;
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Total payable: $XXX </h1>

        <div className="border flex flex-row  gap-3 p-4 border-gray-300 rounded-lg mb-4">
          <BsInfoCircleFill className=" w-12 mt-1" />
          <div className="flex flex-col gap-1">
            <h1 className=" text-black text-sm font-bold items-center">
              You will be charged in AED
            </h1>
            <p className="text-gray-400 text-sm">
              You will be charged in AED The price shown here is in US Dollar
              (USD) as per the current conversion rate. You will be charged in
              United Arab Emirates Dirham (AED).
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 sm:hidden"></div>
      </div>
    </div>
  );
}

export default Amount;
