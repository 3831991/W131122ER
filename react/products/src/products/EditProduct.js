import { useEffect, useState } from "react";

export default function EditProduct({ product, productChange }) {
    const [formData, setFormData] = useState();

    useEffect(() => {
        if (product) {
            setFormData(product);
        } else {
            setFormData();
        }
    }, [product]);

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

        fetch(`https://api.shipap.co.il/products/${product.id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(() => {
            productChange(formData);
        });
    }

    return (
        <>
            {
                formData &&
                <div className="modal-frame">
                    <div className="modal">
                        <header>
                            <button className="close" onClick={() => productChange()}>x</button>
                            <h2>עריכת מוצר</h2>
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

                            <button>שמור מוצר</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}