import './Products.css';
import { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/products", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        });
    }, []);

    function removeProduct(id) {
        fetch(`https://api.shipap.co.il/products/${id}`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            
        });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>שם המוצר</th>
                    <th>מחיר</th>
                    <th>הנחה</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p, i) => 
                        <tr key={p.id}>
                            <td>{i + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.discount}</td>
                            <td>
                                <button className='remove' onClick={() => removeProduct(p.id)}><AiFillDelete /></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}