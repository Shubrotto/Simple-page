import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Portfolios from "../components/Portfolio/Portfolios";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Portfolios />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
