import { Link, useNavigate, useParams } from 'react-router-dom';
import './Product.css';
import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

export default function ProductEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`, {
            credentials: 'include',
            headers: {
                'Authorization': localStorage.token,
            },
        })
        .then(res => res.json())
        .then(data => setItem(data));
    }, [id]);

    const handelInput = ev => {
        const { name, value } = ev.target;

        setItem({
            ...item,
            [name]: value,
        });
    }

    const save = ev => {
        ev.preventDefault();

        fetch(`http://localhost:4000/products/${item._id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.token,
            },
            body: JSON.stringify(item),
        })
        .then(() => navigate('/products'));
    }

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/products"><AiOutlineRight /> חזרה לרשימת המוצרים</Link>
            </button>

            {
                item &&
                <>
                    <h2>עריכת מוצר</h2>

                    <form onSubmit={save}>
                        <label>
                            Name:
                            <input type="text" name="name" value={item.name} onChange={handelInput} />
                        </label>

                        <label>
                            Price:
                            <input type="text" name="price" value={item.price} onChange={handelInput} />
                        </label>

                        <label>
                            Discount:
                            <input type="text" name="discount" value={item.discount} onChange={handelInput} />
                        </label>

                        <button>שמירה</button>
                    </form>
                </>
            }
        </div>
    )
}