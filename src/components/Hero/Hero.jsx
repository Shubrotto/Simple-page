import "./hero.css";
import { smiles } from "../../data";
import HeroItem from "../HeroItem/HeroItem";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  return (
    <div className="hero_container">
      <Carousel
        className="hero_wrapper"
        next={(next, active) =>
          console.log(`we left ${active}, and are now at ${next}`)
        }
        prev={(prev, active) =>
          console.log(`we left ${active}, and are now at ${prev}`)
        }
      >
        {smiles?.map((smile) => (
          <HeroItem smile={smile} key={smile.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
