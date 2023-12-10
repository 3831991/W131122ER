import React, { useEffect, useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
    const [structure, setStructure] = useState([
        { name: 'amount', title: 'כמות מוצרים' },
        { name: 'avg', title: 'ממוצע מחירים' },
        { name: 'min', title: 'מחיר מקסימלי' },
        { name: 'max', title: 'מחיר מינימלי' },
    ]);

    useEffect(() => {
        const url = 'http://localhost:4000/dashboard';
        const params = {
            credentials: 'include',
        };

        Promise.all([
            fetch(`${url}/products/amount`, params).then(res => res.text()),
            fetch(`${url}/products/avg`, params).then(res => res.text()),
            fetch(`${url}/products/min`, params).then(res => res.text()),
            fetch(`${url}/products/max`, params).then(res => res.text()),
        ])
        .then(data => {
            structure.forEach((item, i) => item.value = Math.round(data[i] * 10) / 10);
            setStructure([...structure]);
        });
    }, [])

    return (
        <div className='Dashboard'>
            {
                structure.map(s => 
                    <div key={s.name} className='card'>
                        <header>{s.title}</header>
                        <div>{s.value}</div>
                    </div>    
                )
            }
        </div>
    )
}
