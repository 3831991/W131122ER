import { useContext, useState } from 'react';
import './User.css';
import { GeneralContext } from '../App';

export default function Signup({ success }) {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });
    const [signupError, setSignupError] = useState('');
    const { setIsLoader, snackbar } = useContext(GeneralContext);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const signup = ev => {
        ev.preventDefault();
        setIsLoader(true);

        fetch("https://api.shipap.co.il/signup", {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-type': 'application/json'},
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
            success(data);
            snackbar('המשתמש נוצר בהצלחה');
        })
        .catch(err => {
            setSignupError(err.message);
            snackbar(err.message);
        })
        .finally(() => setIsLoader(false));
    }

    return (
        <div className="Login smallFrame">
            <h2>הרשמה</h2>

            <form onSubmit={signup}>
                <label>
                    שם משתמש:
                    <input type="text" name='userName' value={formData.userName} onChange={handelInput} />
                </label>

                <label>
                    סיסמה:
                    <input type="password" name='password' value={formData.password} onChange={handelInput} />
                </label>

                <label>
                    אימייל:
                    <input type="mail" name='email' value={formData.email} onChange={handelInput} />
                </label>

                <label>
                    שם מלא:
                    <input type="text" name='fullName' value={formData.fullName} onChange={handelInput} />
                </label>

                <button>הרשם</button>

                {signupError && <div className='fieldError'>{signupError}</div>}
            </form>
        </div>
    )
}