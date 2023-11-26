import { useState } from "react"
import { Link } from "react-router-dom";

export default function Login() {
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

    const login = ev => {
        ev.preventDefault();

        fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(res => {
            if (res.ok) {
                console.log("Success")
            } else {
                console.log("Error: ")
            }
        })
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