import { PiLockFill } from "react-icons/pi";
function ProceedButton() {
  return (
    <button className="bg-black p-5 text-center mb-6 mt-2 rounded-xl">
      <p className="flex flex-row gap-1 text-white items-center justify-center font-roboto text-xl">
        <PiLockFill /> Confirm & pay
      </p>
    </button>
  );
}

export default ProceedButton;
