import { Link, useNavigate, useParams } from 'react-router-dom';
import './Articles.css';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import moment from 'moment';
import { GeneralContext } from '../App';

export default function ArticlesEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();
    const { snackbar, setIsLoader } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (id === 'new') {
            setItem({
                publishDate: moment().format("YYYY-MM-DD"),
                headline: '',
                description: '',
                content: '',
                imgUrl: '',
            });
        } else {
            setIsLoader(true);

            fetch(`https://api.shipap.co.il/articles/${id}`, {
                credentials: 'include',
            })
            .then(res => res.json())
            .then(data => setItem(data))
            .finally(() => setIsLoader(false));
        }
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
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles` + (item.id ? `/${item.id}` : ''), {
            credentials: 'include',
            method: item.id ? 'PUT' : 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(item),
        })
        .then(() => {
            navigate('/');
        });
    }

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/"><AiOutlineRight /> חזרה לרשימת הכתבות</Link>
            </button>

            {
                item &&
                <>
                    <h2>{item.id ? 'עריכת' : 'הוספת'} כתבה</h2>

                    <form onSubmit={save}>
                        <label>
                            כותרת:
                            <input type="text" name="headline" value={item.headline} onChange={handelInput} />
                        </label>

                        <label>
                            קישור לתמונה:
                            <input type="text" name="imgUrl" value={item.imgUrl} onChange={handelInput} />
                        </label> 

                        <label>
                            תאריך פרסום:
                            <input type="date" name="publishDate" value={item.publishDate} onChange={handelInput} />
                        </label> 

                        <label>
                            תיאור:
                            <textarea name="description" cols="30" rows="5" value={item.description} onChange={handelInput}></textarea>
                        </label>

                        <label>
                            תוכן:
                            <textarea name="content" cols="30" rows="10" value={item.content} onChange={handelInput}></textarea>
                        </label>

                        <button>{item.id ? 'שמירה' : 'הוספה'}</button>
                    </form>
                </>
            }
        </div>
    )
}