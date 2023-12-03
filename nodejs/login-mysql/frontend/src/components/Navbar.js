import './Navbar.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Navbar() {
    const loc = useLocation();

    const navbar = [
        { path: '/', title: 'בית' },
        { path: '/products', title: 'ניהול מוצרים' },
    ];

    return (
        <nav>
            <ul>
                {
                    navbar.map(n => 
                        <li key={n.path} className={loc.pathname === n.path ? 'active' : '' }>
                            <Link to={n.path}>{n.title}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navbar;