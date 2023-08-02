import './User.css';

export default function Logout({ success }) {

    const logout = () => {
        fetch("https://api.shipap.co.il/logout", {
            credentials: 'include',
        })
        .then(() => {
            success();
        });
    }

    return <button className="logout" onClick={logout}>התנתק</button>
}