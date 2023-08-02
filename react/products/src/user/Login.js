import './User.css';
import { useState } from 'react';
import Joi from 'joi';
import { JOI_HEBREW } from '../joi-hebrew';

export default function Login({ success }) {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [loginError, setLoginError] = useState('');

    const loginSchema = Joi.object({
        userName: Joi.string().min(3).max(10).required(),
        password: Joi.string().required(),
    });

    const login = ev => {
        ev.preventDefault();

        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                success(data.user);
            } else {
                setLoginError(data.message);
            }
        });
    }

    const handelInput = ev => {
        const { name, value } = ev.target;
        
        const obj = {
            ...formData,
            [name]: value,
        };

        const schema = loginSchema.validate(obj, {
            abortEarly: false,
            messages: { he: JOI_HEBREW },
            errors: { language: 'he' }
        });

        const err = {
            ...errors,
            [name]: undefined,
        };

        if (schema.error) {
            const e = schema.error.details.find(x => x.context.key === name);
            err[name] = e?.message;
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        setFormData(obj);
        setErrors(err);
    }

    return (
        <>
            <div className="Login smallFrame">
                <h2>התחברות</h2>

                <form onSubmit={login}>
                    <label>
                        שם משתמש:
                        <input type="text" name='userName' value={formData.userName} onChange={handelInput} />
                    </label>

                    { errors.userName ? <div className='fieldError'>{errors.userName}</div> : '' }

                    <label>
                        סיסמה:
                        <input type="password" name='password' value={formData.password} onChange={handelInput} />
                    </label>

                    { errors.password ? <div className='fieldError'>{errors.password}</div> : '' }

                    <button>התחבר</button>

                    { loginError ? <div className='fieldError'>{loginError}</div> : '' }
                </form>
            </div>
        </>
    )
}