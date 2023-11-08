import { Link } from 'react-router-dom';
import './CSS/Navbar.css'

const Navbar  = () => {
    return ( 
        <div className="navbar">
            <Link to="HomePage">Home</Link>
            <Link to="AboutUs">About us</Link>
            <div class="dropdown">
                <button class="dropbtn">Consoles
                    {/* <i class="fa fa-caret-down"></i> */}
                </button>
                <div class="dropdown-content">
                    <Link to="PlayStation3Consoles">PlayStation 3</Link>
                    <Link to="PlayStation4Consoles">PlayStation 4</Link>
                    <Link to="PlayStation5Consoles">PlayStation 5</Link>
                    <Link to="Xbox360Consoles">Xbox 360</Link>
                    <Link to="XboxOneConsoles">Xbox One X</Link>
                    <Link to="XboxSeriesConsoles">Xbox Series X</Link>
                    <Link to="NintendoSwitchConsoles">Nintendo Switch</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Games
                    {/* <i class="fa fa-caret-down"></i> */}
                </button>
                <div class="dropdown-content">
                    <Link to="PlayStation3">PlayStation 3</Link>
                    <Link to="PlayStation4">PlayStation 4</Link>
                    <Link to="PlayStation5">PlayStation 5</Link>
                    <Link to="Xbox360">Xbox 360</Link>
                    <Link to="XboxOne">Xbox One X</Link>
                    <Link to="XboxSeries">Xbox Series X</Link>
                    <Link to="NintendoSwitch">Nintendo Switch</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;