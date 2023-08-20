import { useContext } from "react";
import { GeneralContext } from "../App";

export default function Logout() {
    const { user, setUser, snackbar, setIsLoader } = useContext(GeneralContext);

    const logout = () => {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/logout`, {
            credentials: 'include',
        })
        .then(() => {
            setUser(null);
            setIsLoader(false);
            snackbar("המשתמש נותק בהצלחה");
        });
    }

    return (
        <p className="user">
            {user.fullName} מחובר!
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}