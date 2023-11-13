import Home from "./pages/Home"
import Flip from "./library/component_1/code"

import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
  <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/flip" exact element={<Flip />} />
      </Routes>

  

    </>
  )
}

export default App
