const Accordian = ({ header, text }) => {
  return (
    <div className="my-10 flex flex-col justify-start">
      <div className="header flex gap-10 justify-betweenw-full">
        <h3>{header}</h3>
        <button>+</button>
      </div>
      <div className="text block">{text}</div>
    </div>
  );
};

export default Accordian;
