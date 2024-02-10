import { ReactNode } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  preIcon: ReactNode | null;
  postIcon: ReactNode | null;
}

const InputField: React.FC<InputProps> = ({
  type,
  placeholder,
  preIcon,
  postIcon,
}) => {
  return (
    <div className="p-4 flex flex-row justify-between items-center rounded-2xl border border-gray-300">
      <div className="flex flex-row gap-2 items-center">
        {preIcon}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full focus:border-transparent focus:outline-none"
        />
      </div>
      {postIcon}
    </div>
  );
};

export default InputField;
