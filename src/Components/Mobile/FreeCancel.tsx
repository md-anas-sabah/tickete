import { HiInformationCircle } from "react-icons/hi2";
function FreeCancel() {
  return (
    <div className="mt-12 sm:mt-10">
      <div className="flex-row justify-around flex px-4 py-4 sm:px-3 sm:py-3 border border-gray-300 bg-gray-100 rounded-3xl">
        <div className="w-72 sm:w-full sm:ml-6">
          <h1 className="font-bold">Free cancellation</h1>
          <p className="text-gray-400">
            Tickets can be cancelled by 13th December, 2022.
          </p>
        </div>
        <div className="sm:mr-5">
          <HiInformationCircle className="text-gray-400" />
        </div>
      </div>

      <div className="mt-5 mb-4 h-[1px] w-full bg-gray-300 sm:hidden"></div>
    </div>
  );
}

export default FreeCancel;
