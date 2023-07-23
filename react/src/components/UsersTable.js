import { users } from "./UsersData";
import { useState } from 'react';

export default function UsersTable() {
    const [data, setData] = useState(users);

    return (
        <p>טבלה</p>
    )
}