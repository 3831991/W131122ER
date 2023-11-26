export default function Logout() {
    const logout = () => {

    }

    return (
        <p className="user">
            {user.fullName} מחובר!
            <button className="logout" onClick={logout}>התנתק</button>
        </p>
    )
}