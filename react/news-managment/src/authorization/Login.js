import { useState } from "react"

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

    return (
        <>
            <div className="Login smallFrame">
                <h2>התחברות</h2>

                <form>
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
        </>
    )
}