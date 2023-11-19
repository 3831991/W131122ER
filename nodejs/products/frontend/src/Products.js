import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaRecycle } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }, []);

    const remove = (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        fetch(`http://localhost:4000/products/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const newData = products.filter(x => x.id !== id);
            setProducts(newData);
        });
    }

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
                        <th></th>
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
                                <td>
                                    <Link to={`/product/${a.id}`}>
                                        <button className="green"><AiFillEdit /></button>
                                    </Link>
                                    
                                    <button className="red" onClick={() => remove(a.id)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
