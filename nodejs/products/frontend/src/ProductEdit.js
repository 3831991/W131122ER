import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductEdit() {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const [errMessage, setErrMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id === 'new') {
            setProduct({
                name: '',
                price: 0,
                discount: 0,
            });
        } else {
            fetch(`http://localhost:4000/products/${id}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
            .then(data => setProduct(data))
            .catch(err => setErrMessage(err.message));
        }
    }, [id]);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setProduct({
            ...product,
            [name]: value,
        });
    }

    const save = ev => {
        ev.preventDefault();

        if (product.id) {
            fetch(`http://localhost:4000/products/${product.id}`, {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(product),
            })
            .then(() => navigate('/'));
        } else {
            fetch(`http://localhost:4000/products`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(product),
            })
            .then(() => navigate('/'));
        }
    }

    return (
        <>
            {
                product ?
                <div className='smallFrame'>
                    <h2>{id === 'new' ? 'Add' : 'Edit'} product</h2>

                    <form onSubmit={save}>
                        <label>
                            Product name:
                            <input type="text" name='name' value={product.name} onChange={handelInput} />
                        </label>
                        
                        <label>
                            Price:
                            <input type="number" name='price' value={product.price} onChange={handelInput} />
                        </label>
                        
                        <label>
                            Discount:
                            <input type="number" name='discount' value={product.discount} onChange={handelInput} />
                        </label>

                        <button>{id === 'new' ? 'Add' : 'Save'}</button>
                    </form>
                </div>
                : errMessage ? <p className='errMessage'>{errMessage}!</p> : ''
            }
        </>
        
    )
}
