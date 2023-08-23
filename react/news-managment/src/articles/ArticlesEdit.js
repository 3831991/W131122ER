import { Link, useParams } from 'react-router-dom';
import './Articles.css';
import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import moment from 'moment';

export default function ArticlesEdit() {
    const { id } = useParams();
    const [item, setItem] = useState();

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
            setLoading(true);

            fetch(`https://api.shipap.co.il/articles/${id}`, {
                credentials: 'include',
            })
            .then(res => res.json())
            .then(data => setItem(data))
            .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <div className='ArticlesEdit'>
            <button className='returnLink'>
                <Link to="/"><AiOutlineRight /> חזרה לרשימת הכתבות</Link>
            </button>

            {
                item &&
                <>
                    <h2>{item.id ? 'עריכת' : 'הוספת'} כתבה</h2>

                    <form>
                        
                    </form>
                </>
            }
        </div>
    )
}