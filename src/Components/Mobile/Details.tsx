import InputField from "./InputField";
import { RiEarthLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";

const inputArray = [
  {
    type: "text",
    placeholder: "FullName *",
  },
  {
    type: "number",
    placeholder: "Country code *",
    preIcon: <RiEarthLine className="h-6 w-6 text-gray-400" />,
    postIcon: <FaChevronDown className=" text-gray-400" />,
  },
  {
    type: "number",
    placeholder: "Phone number *",
  },
  {
    type: "email",
    placeholder: "Email *",
  },
  {
    type: "email",
    placeholder: "Confirm email *",
  },
];

function Details() {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Enter your details</h1>
        <p className="text-base text-gray-400">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-5 font-roboto">
        {inputArray.map((input) => {
          return (
            <InputField
              key={input?.placeholder}
              type={input?.type}
              placeholder={input?.placeholder}
              preIcon={input?.preIcon}
              postIcon={input?.postIcon}
            />
          );
        })}
      </form>
      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
}

export default Details;
