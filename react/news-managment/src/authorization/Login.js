import { useContext, useState } from "react"
import { GeneralContext } from "../App";

export default function Login() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });

    const { setUser, snackbar, setIsLoader } = useContext(GeneralContext);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const login = ev => {
        ev.preventDefault();

        if (!formData.userName) {
            snackbar("חסר שם משתמש");
            return;
        }

        if (!formData.password) {
            snackbar("למה שתצליחו להתחבר ללא סיסמה???????????");
            return;
        }
        
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/login`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(data => {
            setUser(data);
        })
        .catch(err => {
            snackbar(err.message);
        })
        .finally(() => setIsLoader(false));
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
        </>
    )
}