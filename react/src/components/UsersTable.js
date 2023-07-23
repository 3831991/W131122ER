import './Users.css';
import { users } from "./UsersData";
import { useState } from 'react';

export default function UsersTable() {
    const [data, setData] = useState(users);

    const removeUser = (userId) => {
        const newData = data.filter(u => u.id !== userId);

        setData(newData);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>שם מלא</th>
                    <th>אימייל</th>
                    <th>טלפון</th>
                    <th>תאריך לידה</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((u, i) => 
                    <tr key={u.id}>
                        <td>{i + 1}</td>
                        <td>{u.firstName} {u.lastName}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                        <td>{u.birthday}</td>
                        <td>
                            <button className="remove" onClick={() => removeUser(u.id)}>❌</button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}