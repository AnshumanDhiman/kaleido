import Home from "./pages/Home";
import Flip from "./library/component_1/code";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/flip" exact element={<Flip />} />
      </Routes>
    </>
  );
}

export default App;
