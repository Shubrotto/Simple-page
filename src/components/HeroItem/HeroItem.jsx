import { useState } from "react";
import "./heroItem.css";

const HeroItem = ({ smile }) => {
  const [slide, setsSlide] = useState(1);
  const handleSlideClick = () => {
    const infoWidth = document.querySelectorAll(".hero_item");
    console.log(slide);
    if (infoWidth.Index > slide) {
      for (let i = 1; i < infoWidth.length; i++) {
        const infoWidth = infoWidth + 1;
        setsSlide(infoWidth[i]);
        console.log(infoWidth[i]);
      }

      console.log("object");
    } else {
      setsSlide(slide);
    }
  };
  return (
    <>
      <div className="hero_item">
        <div className="info">
          <h1>{smile.title}</h1>
          <p>{smile.desc}</p>
        </div>
        <div className="info_img">
          <img src={smile.Image} alt="" />
        </div>
      </div>
      <button className="info_btn" onClick={handleSlideClick}>
        Next Slide
      </button>
    </>
  );
};

export default HeroItem;
