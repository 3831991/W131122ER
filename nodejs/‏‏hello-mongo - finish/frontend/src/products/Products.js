import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/products", {
            headers: {
                'Authorization': localStorage.token,
            },
        })
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }, []);

    const remove = id => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        fetch(`http://localhost:4000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token,
            },
        })
        .then(() => {
            const newData = products.filter(x => x._id !== id);
            setProducts(newData);
        });
    }

    return (
        <div>
            <div className='btnFrame'>
                <button className='returnLink' onClick={() => navigate('/product/new')}>Add product</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Created Time</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((a, i) =>
                            <tr key={a._id}>
                                <td>{i + 1}</td>
                                <td>{moment(a.createdTime).format("D/M/Y")}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.discount}</td>
                                <td>
                                    <Link to={`/product/${a._id}`}>
                                        <button className="green"><AiFillEdit /></button>
                                    </Link>
                                    
                                    <button className="red" onClick={() => remove(a._id)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
