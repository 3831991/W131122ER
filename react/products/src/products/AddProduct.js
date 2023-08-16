import { useContext, useState } from 'react';
import './Products.css';
import { GeneralContext } from '../App';

export default function AddProduct({ added }) {
    const [isModal, setIsModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        discount: 0,
    });
    const { setIsLoader } = useContext(GeneralContext);

    const inputChange = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const save = ev => {
        ev.preventDefault();

        if (!formData.name) {
            alert("ממש מצחיק");
            return;
        }

        if (!formData.price) {
            alert("ממש עצוב");
            return;
        }

        setIsLoader(true);

        fetch(`https://api.shipap.co.il/products`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            added(data);
            setIsModal(false);
            setIsLoader(false);
        });
    }

    return (
        <>
            <button className='addBtn' onClick={() => setIsModal(true)}>+ מוצר חדש</button>

            {
                isModal &&
                <div className="modal-frame">
                    <div className="modal">
                        <header>
                            <button className="close" onClick={() => setIsModal(false)}>x</button>
                            <h2>מוצר חדש</h2>
                        </header>

                        <form onSubmit={save}>
                            <label>
                                שם המוצר:
                                <input type="text" name="name" value={formData.name} onChange={inputChange} />
                            </label>

                            <label>
                                מחיר:
                                <input type="number" name="price" value={formData.price} onChange={inputChange} />
                            </label>

                            <label>
                                הנחה:
                                <input type="number" name="discount" value={formData.discount} onChange={inputChange} />
                            </label>

                            <button>הוסף מוצר</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}