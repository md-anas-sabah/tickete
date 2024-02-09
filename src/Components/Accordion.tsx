import { useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

interface AccordionProps {
  title: string;
  content: string | null;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex gap-4 items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <button className="text-xl mr-2">
          {isOpen ? (
            <FaMinus className="h-4 w-4" />
          ) : (
            <FaPlus className="h-4 w-4" />
          )}
        </button>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {isOpen && (
        <div className="p-4 border-t">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
