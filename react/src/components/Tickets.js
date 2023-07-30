import { useEffect, useState } from 'react';
import './Tickets.css';

export default function Tickets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/contact")
            .then(res => res.json())
            .then(tickets => {
                setData(tickets);
            });
    }, []);

    return (
        <div className="Tickets">

        </div>
    )
}