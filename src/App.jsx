import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />\
      </Routes>
    </BrowserRouter>
  );
}

export default App;
