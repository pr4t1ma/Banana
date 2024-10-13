import { FC, useState } from "react";

type accordianProps = {
  header: string;
  text: string;
};

const Accordian: FC<accordianProps> = ({ header, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="my-10 flex flex-col justify-start items-start shadow-sm p-10"
    >
      <div className="header flex gap-10 justify-between w-full my-5">
        <h3 className="bold text-2xl">{header}</h3>
        <button className="text-2xl">+</button>
      </div>
      {isOpen && <div className="text block">{text}</div>}
    </div>
  );
};

export default Accordian;
