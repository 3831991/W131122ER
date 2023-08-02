import { useState } from 'react';
import './User.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });

    

    return <p>Signup works</p>
}