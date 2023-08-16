import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../App";

export default function EditProduct({ product, edited }) {
    const [formData, setFormData] = useState();
    const { setIsLoader } = useContext(GeneralContext);

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

        setIsLoader(true);

        fetch(`https://api.shipap.co.il/products/${formData.id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(() => {
            edited(formData);
            setIsLoader(false);
        });
    }

    return (
        <>
            {
                formData &&
                <div className="modal-frame">
                    <div className="modal">
                        <header>
                            <button className="close" onClick={() => edited()}>x</button>
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

                            <button>שמירה</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}