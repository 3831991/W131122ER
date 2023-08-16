import { useContext } from 'react';
import './User.css';
import { GeneralContext } from '../App';

export default function Logout() {
    const { setIsLoader, setUser, setIsLogged } = useContext(GeneralContext);

    const logout = () => {
        setIsLoader(true);

        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            setUser();
            setIsLogged(false);
            setIsLoader(false);
        });
    }

    return <button className="logout" onClick={logout}>התנתק</button>
}