import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        password: '',
        email: '',
        fullName: '',
    });

    const navigate = useNavigate();

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const signup = ev => {
        ev.preventDefault();

        fetch("http://localhost:4000/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
        })
        .then(res => {
            if (res.ok) {
                navigate('/login');
            } else {
                console.error("מה אתה לא רואה שיש שגיאה?????");
            }
        })
    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>יצירת משתמש</h2>

                <form onSubmit={signup}>
                    <label>
                        שם מלא:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handelInput} />
                    </label>

                    <label>
                        אימייל:
                        <input type="email" name="email" value={formData.email} onChange={handelInput} />
                    </label>

                    <label>
                        סיסמה:
                        <input type="password" name="password" value={formData.password} onChange={handelInput} />
                    </label>

                    <button>הרשם</button>
                </form>
            </div>

            <p className="signup">
                <Link to="/login">להתחברות לחץ כאן</Link>
            </p>
        </>
    )
}