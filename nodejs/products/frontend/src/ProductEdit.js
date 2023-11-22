import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductEdit() {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        if (id === 'new') {
            setProduct({
                name: '',
                price: 0,
                discount: 0,
            });
        } else {
            fetch(`http://localhost:4000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
        }
    }, [id]);

    const handelInput = (ev) => {
        const { name, value } = ev.target;

        setProduct({
            ...product,
            [name]: value,
        });
    }

    return (
        <>
            {
                product ?
                <div className='smallFrame'>
                    <h2>{id === 'new' ? 'Add' : 'Edit'} product</h2>

                    <form>
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
                : ''
            }
        </>
        
    )
}
