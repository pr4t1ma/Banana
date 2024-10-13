import React, { FC } from "react";
type imgProps = {
  src: string;
  alt: string;
  width: number;
};

type cardProps = {
  title: string;
  text: string;
  img: imgProps;
};

const Card: FC<cardProps> = ({ title, img, text, alt, width }) => {
  return (
    <div>
      <h1 className="l">Bananas</h1>
      <div className="flex flex-col justify-center items-center gap-10  p-20 shadow-md ">
        <h4 className="bold text-2x">{title}</h4>
        <img src={img.src} alt={img.alt} width={img.width} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
