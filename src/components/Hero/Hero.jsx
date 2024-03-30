import "./hero.css";
import { smiles } from "../../data";
import { useState } from "react";

const Hero = () => {
  const [IsSlide, setIsSlide] = useState(1);

  const handleSlideClick = () => {
    const infoWidth = document.querySelectorAll(".hero_item")[0];
    if (infoWidth.length > IsSlide) {
      // ;
      for (let i = 0; i < infoWidth.length; i++) {
        console.log(infoWidth);
      }

      console.log("object");
    } else {
      setIsSlide(infoWidth[0]);
      console.log(infoWidth);
    }
    const w = window.innerHeight - 90;
    console.log(() => 0 - w);
  };
  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        {smiles?.map((smile) => (
          <div key={smile.id} className="hero_item">
            <div className="info">
              <h1>{smile.title}</h1>
              <p>{smile.desc}</p>
            </div>
            <div className="info_img">
              <img src={smile.Image} alt="" />
            </div>
          </div>
        ))}
        <button className="info_btn" onClick={() => handleSlideClick()}>
          Next Slide
        </button>
      </div>
    </div>
  );
};

export default Hero;
