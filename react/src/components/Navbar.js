import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">בית</Link></li>
                <li><Link to="/counter">מונה</Link></li>
                <li><Link to="/gallery">גלריה</Link></li>
                <li><Link to="/settings">הגדרות</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;