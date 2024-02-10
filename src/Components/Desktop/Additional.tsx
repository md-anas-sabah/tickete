import { FaChevronDown } from "react-icons/fa6";
import InputField from "../Mobile/InputField";

function Additional() {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Additional information</h1>
        <p className="text-base text-gray-400">
          We need a few more details to complete your reservation.
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-5 font-roboto">
        <div className="flex w-full flex-row gap-4">
          <div className="w-1/2">
            <InputField
              type={"text"}
              placeholder={"Input label *"}
              preIcon={null}
              postIcon={null}
            />
          </div>
          <div className="w-1/2">
            <InputField
              type="text"
              placeholder={"Select *"}
              preIcon={null}
              postIcon={<FaChevronDown className=" text-gray-400" />}
            />
          </div>
        </div>
        <InputField
          type="text"
          placeholder={"Multiselect *"}
          preIcon={null}
          postIcon={<FaChevronDown className=" text-gray-400" />}
        />
      </form>
      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
}

export default Additional;
