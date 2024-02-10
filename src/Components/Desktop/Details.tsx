import InputField from "./../Mobile/InputField";
import { RiEarthLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";


function Details() {
  return (
    <div className="mt-10 flex flex-col ">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Enter your details</h1>
        <p className="text-base text-gray-400">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-5 font-roboto">
        <InputField
          type={"text"}
          placeholder={"FullName *"}
          preIcon=""
          postIcon=""
        />
        <div className="flex flex-row w-full gap-10">
          <div className="flex w-1/2 flex-col gap-4">
            <InputField
              type={"number"}
              placeholder={"Country code *"}
              preIcon={<RiEarthLine className="h-6 w-6 text-gray-400" />}
              postIcon={<FaChevronDown className=" text-gray-400" />}
            />
            <InputField
              type={"email"}
              placeholder={"Email *"}
              preIcon=""
              postIcon=""
            />
          </div>
          <div className="flex w-1/2 flex-col gap-4">
            <InputField
              type={"number"}
              placeholder={"Phone number *"}
              preIcon=""
              postIcon=""
            />
            <InputField
              type={"email"}
              placeholder={"Confirm email *"}
              preIcon=""
              postIcon=""
            />
          </div>
        </div>
      </form>
      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
}

export default Details;
