import { useContext } from 'react';
import './User.css';
import { GeneralContext } from '../App';

export default function Logout({ success }) {
    const { setIsLoader } = useContext(GeneralContext);

    const logout = () => {
        setIsLoader(true);

        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            success();
            setIsLoader(false);
        });
    }

    return <button className="logout" onClick={logout}>התנתק</button>
}