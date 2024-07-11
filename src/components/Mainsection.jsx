import { Routes, Route } from "react-router-dom" 
import Home from "./Colors/Home"
import Blue from "./Colors/Blue"
import Red from "./Colors/Red"
import Green from "./Colors/Green"
import MultiColor from "./Colors/MultiColor"

function Mainsection() {

  return (
    <div id="main-section">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blue' element={<Blue />} />
        <Route path='/red' element={<Red />} />
        <Route path="/green" element={<Green />}/>
        <Route path="/multicolor" element={<MultiColor />}/>
      </Routes>
    </div>
  )
}
export default Mainsection