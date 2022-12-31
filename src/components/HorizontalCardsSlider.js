import React, { useEffect, useRef } from "react";
import Card from "./Card";

const HorizontalCardsSlider = ({ title, Data, isLive, liveVideo }) => {
  const scrollable = useRef(null);
  const scrollIt = (toRight) => {
    const scrollLength = 1000;
    scrollable.current.scrollBy({
      left: scrollLength * (toRight ? 1 : -1),
      behavior: "smooth",
    });
  };
  useEffect(() => {
    console.log(Data);
  }, []);
  return (
    <div id="HorizontalCardsSlider" className="HorizontalCardsSlider-wrapper">
      <h3>{title}</h3>
      <div className="horzontalcards-wrapper" ref={scrollable}>
        {Data.map((item, index) => {
          return <Card {...item} isLive={isLive} Data={Data} id={item.id} />;
        })}
      </div>

      <div
        id="toLeft"
        className="HorizontalCardsSlider-btn"
        onClick={() => scrollIt(false)}
      >
        <i className="fa">&#xf053;</i>
      </div>
      <div
        id="toRight"
        className="HorizontalCardsSlider-btn"
        onClick={() => scrollIt(true)}
      >
        <i className="fa">&#xf054;</i>
      </div>
    </div>
  );
};

export default HorizontalCardsSlider;
