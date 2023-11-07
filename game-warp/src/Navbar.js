import './CSS/Navbar.css'

const Navbar  = () => {
    return ( 
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">News</a>
            <div class="dropdown">
                <button class="dropbtn">Consoles
                    {/* <i class="fa fa-caret-down"></i> */}
                </button>
                <div class="dropdown-content">
                    <a href="#">PlayStation 3</a>
                    <a href="#">PlayStation 4</a>
                    <a href="#">PlayStation 5</a>
                    <a href="#">Xbox 360</a>
                    <a href="#">Xbox One X</a>
                    <a href="#">Xbox Series X</a>
                    <a href="#">Nintendo Switch</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Games
                    {/* <i class="fa fa-caret-down"></i> */}
                </button>
                <div class="dropdown-content">
                    <a href="#">PlayStation 3</a>
                    <a href="#">PlayStation 4</a>
                    <a href="#">PlayStation 5</a>
                    <a href="#">Xbox 360</a>
                    <a href="#">Xbox One X</a>
                    <a href="#">Xbox Series X</a>
                    <a href="#">Nintendo Switch</a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;