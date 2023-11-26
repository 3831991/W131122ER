import { useState } from "react"
import { Link } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const signup = ev => {
        ev.preventDefault();

        
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
                    שם משתמש:
                    <input type="text" name="userName" value={formData.userName} onChange={handelInput} />
                </label>

                <label>
                    סיסמה:
                    <input type="password" name="password" value={formData.password} onChange={handelInput} />
                </label>

                <button>הרשם</button>
            </form>
        </div>
        
        <p className="signup">
            <Link to="/">להתחברות לחץ כאן</Link>
        </p>
    </>
    )
}