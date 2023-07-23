import { users } from "./UsersData";
import { useState } from 'react';

export default function UsersList() {
    const [data, setData] = useState(users);

    return (
        <ul>
            {data.map(u => <li>{u.firstName} {u.lastName}</li>)}
        </ul>
    )
}