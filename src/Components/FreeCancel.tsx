import { HiInformationCircle } from "react-icons/hi2";
function FreeCancel() {
  return (
    <div className="px-4 mt-12">
      <div className="flex-row justify-around flex px-4 py-4 border border-gray-300 bg-gray-100 rounded-3xl">
        <div className="w-72">
          <h1 className="font-bold ">Free cancellation</h1>
          <p className="text-gray-400">
            Tickets can be cancelled by 13th December, 2022.
          </p>
        </div>
        <div className="">
          <HiInformationCircle className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default FreeCancel;
