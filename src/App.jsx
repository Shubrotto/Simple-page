import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<NotFound />} />\
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
