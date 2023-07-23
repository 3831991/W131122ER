import { users } from "./UsersData";
import { useState } from 'react';

export default function UsersCards() {
    const [data, setData] = useState(users);

    return (
        <p>כרטיסים</p>
    )
}