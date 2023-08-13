import './Products.css';
import { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [productEdited, setProductEdited] = useState();

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
        if (!window.confirm("האם למחוק את המוצר?")) {
            return;
        }

        fetch(`https://api.shipap.co.il/products/${id}`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            setProducts(products.filter(x => x.id !== id));
        });
    }

    const update = p => {
        if (p) {
            const i = products.findIndex(x => x.id == p.id);
            products.splice(i, 1, p);
            setProducts(products);
        }

        setProductEdited();
    }

    return (
        <>
            <AddProduct added={newProduct => setProducts([...products, newProduct])} />
            <EditProduct product={productEdited} productChange={update} />

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
                                    <button className='edit' onClick={() => setProductEdited(p)}><AiFillEdit /></button>
                                    <button className='remove' onClick={() => removeProduct(p.id)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}