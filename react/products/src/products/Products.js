import './Products.css';
import { useEffect, useState } from 'react';

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

    return <p>Products works</p>
}