import { useState } from 'react';
import './User.css';

export default function Signup({ success }) {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });
    const [signupError, setSignupError] = useState('');

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const signup = ev => {
        ev.preventDefault();

        fetch("https://api.shipap.co.il/signup", {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {

            } else {
                setSignupError(data.message);
            }
        })
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