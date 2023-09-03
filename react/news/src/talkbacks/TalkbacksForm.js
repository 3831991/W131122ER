import React, { useContext, useState } from 'react';
import { GeneralContext } from '../App';

export default function TalkbacksForm({ articleId, added, parentId }) {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
    });

    const { snackbar, setIsLoader } = useContext(GeneralContext);

    function addComment(ev) {
        ev.preventDefault();
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                articleId,
                parent: parentId || 0,
            }),
        })
        .then(res => res.json())
        .then(data => {
            data.children = [];
            added(data);
            setIsLoader(false);
            snackbar("התגובה נוספה בהצלחה");

            setFormData({
                name: '',
                comment: '',
            });
        });
    }

    const handelInput = ev => {
        const { name, value } = ev.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className='TalkbacksForm block'>
            <form onSubmit={addComment}>
                <input type="text" name="name" placeholder='שם מלא' value={formData.name} onChange={handelInput} required />
                <textarea name="comment" placeholder='תוכן התגובה' cols="30" rows="10" required value={formData.comment} onChange={handelInput}></textarea>
                <p>יש לכתוב בצורה נאותה המדברת לגופו של עניין. אין לכלול לשון הרע.</p>
                <button>שליחת התגובה</button>
            </form>
        </div>
    )
}
