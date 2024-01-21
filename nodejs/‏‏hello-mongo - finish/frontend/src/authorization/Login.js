import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { GeneralContext } from "../App";

export default function Login() {
    const { setUser } = useContext(GeneralContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const login = async ev => {
        ev.preventDefault();

        const res = await fetch("http://localhost:4000/users/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        });

        const data = await res.text();
        localStorage.token = data;

        const res2 = await fetch("http://localhost:4000/users/me", {
            credentials: 'include',
            headers: {
                'Authorization': localStorage.token,
            },
        });

        const user = await res2.json();
        setUser(user);
    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>התחברות</h2>

                <form onSubmit={login}>
                    <label>
                        אימייל:
                        <input type="email" name="email" value={formData.userName} onChange={handelInput} />
                    </label>

                    <label>
                        סיסמה:
                        <input type="password" name="password" value={formData.password} onChange={handelInput} />
                    </label>

                    <button>התחבר</button>
                </form>
            </div>
            
            <p className="signup">
                <Link to="/signup">להרשמה לחץ כאן</Link>
            </p>
        </>
    )
}