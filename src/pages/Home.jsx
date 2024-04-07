import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Portfolios from "../components/Portfolio/Portfolios";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Portfolios />
      <Gallery />
    </>
  );
};

export default Home;
