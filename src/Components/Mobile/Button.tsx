import { FC, ReactNode } from "react";

interface ButtonProps {
  preIcon: ReactNode | null;
  text: string;
}

const Button: FC<ButtonProps> = ({ preIcon, text }) => {
  return (
    <button className="bg-black p-5 text-center mb-6 mt-2 rounded-xl">
      <p className="flex flex-row gap-1 text-white items-center justify-center font-roboto text-xl">
        {preIcon} {text}
      </p>
    </button>
  );
};

export default Button;
