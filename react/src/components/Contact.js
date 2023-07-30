import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handelInput = ev => {
        const { name, value } = ev.target;
        
        const obj = {
            ...formData,
            [name]: value,
        };

        setFormData(obj);
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

                <label>
                    טלפון:
                    <input type="tel" name="phone" value={formData.phone} onChange={handelInput} />
                </label>

                <label>
                    אימייל:
                    <input type="email" name="email" value={formData.email} onChange={handelInput} />
                </label>

                <label>
                    הודעה:
                    <textarea name="message" value={formData.message} onChange={handelInput}></textarea>
                </label>

                <button>שלח</button>
            </form>
        </div>
    )
}