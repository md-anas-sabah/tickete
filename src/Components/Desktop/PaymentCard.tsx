import { GoCreditCard } from "react-icons/go";
import { FaChevronDown, FaRegCircleDot } from "react-icons/fa6";
import { RiEarthLine, RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { PiLockFill, PiPiggyBankFill } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa6";
import InputField from "../Mobile/InputField";
import Button from "../Mobile/Button";
import Amount from "../Mobile/Amount";

const paymentMethod = [
  {
    id: 1,
    text: "Coming soon",
    preIcon: <FaGooglePay className="text-gray-400" />,
  },

  {
    id: 2,
    text: "Coming soon",
    preIcon: <FaApplePay className="text-gray-400" />,
  },
];

function PaymentCard() {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Select your mode of payment</h1>
        <p className="text-base text-gray-400">
          Payments with Tickete are secure and encrypted.
        </p>
      </div>
      <div className="flex-col flex gap-4 mt-7 px-4 py-2 border border-black rounded-3xl">
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row gap-2 items-center">
            <div className="border h-6 w-8 flex items-center justify-center border-gray-400 rounded-md">
              <GoCreditCard className="text-gray-400" />
            </div>
            <h1 className="font-semibold text-base">Credit & debit card</h1>
          </div>
          <FaRegCircleDot className="h-5 w-5" />
        </div>

        <div className="flex flex-row gap-5">
          <div className="border h-5 w-7 flex items-center justify-center border-gray-400 rounded-md">
            <RiVisaLine className="text-blue-900 h-6 w-5" />
          </div>
          <div className="border h-5 w-7 flex items-center justify-center border-gray-400 rounded-md">
            <RiMastercardFill className="text-orange-400 h-6 w-5" />
          </div>
          <div className="border h-5 w-7 flex items-center justify-center border-gray-400 rounded-md">
            <FaCcDinersClub className="text-blue-400 h-6 w-5" />
          </div>
        </div>
        <form className="flex flex-col gap-4 mt-5 font-roboto">
          <div className="flex flex-row w-full gap-10">
            <div className="flex w-1/2 flex-col gap-4">
              <InputField
                type={"number"}
                placeholder={"Name of card *"}
                preIcon={<RiEarthLine className="h-6 w-6 text-gray-400" />}
                postIcon={<FaChevronDown className=" text-gray-400" />}
              />
              <InputField
                type={"number"}
                placeholder={"Expiry date *"}
                preIcon=""
                postIcon=""
              />
            </div>
            <div className="flex w-1/2 flex-col gap-4">
              <InputField
                type={"number"}
                placeholder={"Card number *"}
                preIcon={<GoCreditCard />}
                postIcon=""
              />
              <InputField
                type={"number"}
                placeholder={"CVV/CVC *"}
                preIcon=""
                postIcon=""
              />
            </div>
          </div>
          <div className="mt-5 h-[1px] w-full bg-gray-300"></div>

          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Total payable: $XXX </h1>
              <u className=" text-gray-400 flex gap-2 items-center">
                You will be charged in AED
                <CiCircleInfo />
              </u>
            </div>
            <p className="bg-green-700 flex items-center justify-center gap-1 text-white font-semibold rounded-full h-6 text-[11px] w-32">
              <PiPiggyBankFill /> You saved: &lt;price&gt;
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            By clicking "confirm & pay", you agree to
            <a href="/" className="underline text-blue-600">
              Tickete's general terms and conditions
            </a>{" "}
            and
            <a href="/" className="underline text-blue-600">
              {" "}
              cancellation policy
            </a>
          </p>
          <Button preIcon={<PiLockFill />} text={"Confirm & pay"} />
        </form>
      </div>

      {paymentMethod.map((method) => {
        return (
          <PaymentCardField
            cardTitle={method?.text}
            preIcon={method?.preIcon}
            key={method?.id}
          />
        );
      })}

      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
      <Amount />
    </div>
  );
}

export default PaymentCard;

interface PaymentCardProps {
  cardTitle: string;
  preIcon: React.ReactNode;
}

const PaymentCardField: React.FC<PaymentCardProps> = ({
  cardTitle,
  preIcon,
}) => {
  return (
    <div className="p-5 mt-3 flex rounded-xl border border-gray-400 bg-gray-100 flex-row items-center justify-between">
      <div className="flex gap-2 items-center">
        <div className="border h-6 w-8 flex items-center justify-center  rounded-md">
          {preIcon}
        </div>
        <div className="font-semibold text-gray-400">{cardTitle}</div>
      </div>
      <FaRegCircle className="h-5 w-5 text-gray-400" />
    </div>
  );
};
