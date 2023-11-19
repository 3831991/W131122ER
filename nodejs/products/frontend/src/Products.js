import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Created Time</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((a, i) =>
                            <tr key={a.id}>
                                <td>{i + 1}</td>
                                <td>{moment(a.createdTime).format("D/M/Y")}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.discount}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
