import React, { useEffect } from 'react';

export default function Dashboard() {
    const structure = [
        { name: '', title: 'כמות מוצרים' },
        { name: '', title: 'ממוצע מחירים' },
        { name: '', title: 'מחיר מקסימלי' },
        { name: '', title: 'מחיר מינימלי' },
    ];

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
            const [amount, avg, min, max] = data.map(Number);

        });
    }, [])

    return (
        <div className='Dashboard'>
            <div className='card'>
                <header></header>
                <div></div>
            </div>
        </div>
    )
}
