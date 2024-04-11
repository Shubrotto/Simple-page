import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  const [desc, setDesc] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
    setDesc(desc.length === 1000);
  };
  return (
    <>
      <div className="about_container" style={{ paddingTop: "90px" }}>
        <div className="about_wrapper">
          <h1>About Us</h1>
          <p>
            If you have a lot of stress in your life, find ways to reduce it,
            such as learning a few time-management techniques
          </p>
          <div className="about_info">
            <div className="info_top">
              <img
                src="https://c0.wallpaperflare.com/preview/757/784/7/adorable-boy-children-cute.jpg"
                alt=""
              />
              <h4>Why everyone should happy ?</h4>
            </div>
            <div className="about_bottom">
              {desc.length === 1000 && desc === true ? (
                <p>
                  While it would be wonderful if everyone could be happy all the
                  time, it's important to recognize that happiness is a complex
                  and subjective emotion that can be influenced by various
                  factors, including individual circumstances, mental and
                  physical health, and external events. However, there are
                  several reasons why fostering happiness in society is
                  beneficial: Health Benefits: Happiness is associated with
                  numerous health benefits, including lower stress levels,
                  reduced risk of chronic diseases, and improved immune
                  function. Productivity and Creativity: Happy individuals tend
                  to be more productive, creative, and innovative, leading to
                  greater success in personal and professional endeavors.
                  Stronger Relationships: Happy people often have better
                  interpersonal relationships, leading to stronger social
                  support networks and increased overall well-being. Community
                  Cohesion: Societies with higher levels of happiness tend to
                  have stronger social cohesion, lower crime rates, and greater
                  overall prosperity. Resilience: Happy individuals are better
                  equipped to cope with adversity and bounce back from setbacks,
                  fostering resilience in both individuals and communities.
                  Generosity and Altruism: Research suggests that happier people
                  are more likely to engage in acts of kindness, generosity, and
                  altruism, leading to a more compassionate and supportive
                  society. Positive Ripple Effect: Happiness is contagious. When
                  individuals are happy, they tend to spread positivity to those
                  around them, creating a ripple effect that can uplift entire
                  communities. While it may not be feasible for everyone to be
                  happy all the time, promoting happiness as a societal goal and
                  creating conditions that support individual well-being can
                  lead to a healthier, more prosperous, and more harmonious
                  society overall.
                </p>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  minima quibusdam, omnis dolorem, debitis quod eius deleniti
                  illum nulla odio deserunt ea animi! Optio necessitatibus,
                  delectus repellat aliquam harum fugiat.
                  <button className="about_btn" onClick={handleClick}>
                    See More
                  </button>
                </p>
              )}
              {/* see more button click and see about components and know more fact it will add  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
