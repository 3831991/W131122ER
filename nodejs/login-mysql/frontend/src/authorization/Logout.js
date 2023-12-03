import { useContext } from "react";
import { GeneralContext } from "../App";
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { user, setUser } = useContext(GeneralContext);
    const navigate = useNavigate();

    const logout = () => {
        fetch(`http://localhost:4000/logout`, {
            credentials: 'include',
        })
        .then(() => {
            setUser(null);
            navigate('/');
        });
    }

    return (
        <p className="user">
            {user.fullName} מחובר!
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}