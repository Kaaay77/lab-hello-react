
import logo from "../images/ironhack-logo-xs.png";
import logo2 from "../images/ironhack-xs.png"

function Navbar () {
    return (
        <nav className="navBar1">
            <img className="App-logo"
                id="nav-img"
                src={logo}
                alt="logo"
            />
            <img className="nav-icon"
                id="nav-icon"
                src={logo2}
                alt="nav-icon"
            />
        </nav>
    )
}


export default Navbar;