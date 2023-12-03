import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">בית</Link></li>
                <li><Link to="/products">ניהול מוצרים</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;