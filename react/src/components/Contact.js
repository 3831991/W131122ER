import { useState } from 'react';
import './Contact.css';
import Joi from 'joi';
import { JOI_HEBREW } from '../joi-hebrew';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const contactSchema = Joi.object({
        fullName: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(9).max(12).required(),
        email: Joi.string().min(3).required(),
        message: Joi.string().min(20).max(500).required(),
    });

    const handelInput = ev => {
        const { name, value } = ev.target;
        
        const obj = {
            ...formData,
            [name]: value,
        };

        const schema = contactSchema.validate(obj, { abortEarly: false, messages: { he: JOI_HEBREW }, errors: { language: 'he' } });

        const err = {
            ...errors,
            [name]: undefined,
        };

        if (schema.error) {
            const e = schema.error.details.find(x => x.context.key === name);
            err[name] = e?.message;
        }

        setFormData(obj);
        setErrors(err);
    }

    const send = ev => {
        ev.preventDefault();

        fetch("https://api.shipap.co.il/contact", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then(() => {
            console.log('Sent contact');
        });
    }

    return (
        <div className="Contact">
            <h2>טופס יצירת קשר</h2>

            <form onSubmit={send}>
                <label>
                    שם מלא:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handelInput} />
                </label>

                {errors.fullName && <div className='fieldError'>{errors.fullName}</div>}

                <label>
                    טלפון:
                    <input type="tel" name="phone" value={formData.phone} onChange={handelInput} />
                </label>

                {errors.phone && <div className='fieldError'>{errors.phone}</div>}

                <label>
                    אימייל:
                    <input type="email" name="email" value={formData.email} onChange={handelInput} />
                </label>

                {errors.email && <div className='fieldError'>{errors.email}</div>}

                <label>
                    הודעה:
                    <textarea name="message" value={formData.message} onChange={handelInput}></textarea>
                </label>

                {errors.message && <div className='fieldError'>{errors.message}</div>}

                <button>שלח</button>
            </form>
        </div>
    )
}