import { useState } from "react"
import { Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        userName: '',
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

    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>התחברות</h2>

                <form onSubmit={login}>
                    <label>
                        שם משתמש:
                        <input type="text" name="userName" value={formData.userName} onChange={handelInput} />
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