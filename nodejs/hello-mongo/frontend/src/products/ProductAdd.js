import { Link, useNavigate } from 'react-router-dom';
import './Product.css';
import { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { ProductValid } from './ProductsJoi';

export default function ProductNew() {
    const [item, setItem] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handelInput = ev => {
        const { name, value } = ev.target;

        const obj = {
            ...item,
            [name]: value,
        };

        const validate = ProductValid.validate(obj, { abortEarly: false });

        setIsValid(!validate.error);
        setItem(obj);

        if (validate.error) {
            const err = validate.error.details.find(err => err.context.key === name);

            setErrors({
                ...errors,
                [name]: err?.message,
            });
        } else {
            setErrors({});
        }
    }

    const save = ev => {
        ev.preventDefault();

        if (!isValid) {
            alert("The form is not valid");
            return;
        }

        fetch(`http://localhost:4000/products`, {
            credentials: 'include',
            method: 'POST',
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
                    <h2>הוספת מוצר</h2>
                    
                    <form onSubmit={save}>
                        <label>
                            Name:
                            <input type="text" name="name" value={item.name} onChange={handelInput} />
                        </label>

                        { errors.name ? <div className='error'>{errors.name}</div> : '' }

                        <label>
                            Price:
                            <input type="text" name="price" value={item.price} onChange={handelInput} />
                        </label>

                        { errors.price ? <div className='error'>{errors.price}</div> : '' }

                        <label>
                            Discount:
                            <input type="text" name="discount" value={item.discount} onChange={handelInput} />
                        </label>

                        { errors.discount ? <div className='error'>{errors.discount}</div> : '' }

                        <button disabled={!isValid}>הוסף</button>
                    </form>
                </>
            }
        </div>
    )
}