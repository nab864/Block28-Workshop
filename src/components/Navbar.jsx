import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div id="navbar">
      <Link to='/' className="links home-link">Home</Link>
      <Link to='/blue' className="links blue-link">Blue</Link>
      <Link to='/red' className="links red-link">Red</Link>
      <Link to='/green' className="links green-link">Green</Link>
      <Link to='/multicolor' className="links multi-link">Multi-Color</Link>
    </div>
  )
}

export default Navbar