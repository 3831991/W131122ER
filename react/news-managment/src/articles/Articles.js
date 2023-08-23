import { GeneralContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import './Articles.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const { snackbar, setIsLoader } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data);
            setIsLoader(false);
        });
    }, []);

    function remove(articleId) {
        if (!window.confirm(`האם אתה בטוח כי ברצונך למחוק את כתבה ${articleId}?`)) {
            return;
        }

        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles/${articleId}`, {
            credentials: 'include',
            method: 'DELETE',
        })
        .then(() => {
            setArticles(articles.filter(a => a.id != articleId));
            setIsLoader(false);
        });
    }

    return (
        <>
            <button className='returnLink' onClick={() => navigate('/article/new')}>+ כתבה חדשה</button>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>כותרת</th>
                        <th>תאריך יצירה</th>
                        <th>תאריך פרסום</th>
                        <th>צפיות</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((a, i) =>
                            <tr key={a.id} onDoubleClick={() => navigate(`/article/${a.id}`)}>
                                <td>{i + 1}</td>
                                <td>{a.headline}</td>
                                <td>{moment(a.addedTime).format('DD/MM/YY')}</td>
                                <td>{moment(a.publishDate).format('DD/MM')}</td>
                                <td>{a.views}</td>
                                <td>
                                    <Link to={`/article/${a.id}`}>
                                        <button className="green"><AiFillEdit /></button>
                                    </Link>
                                    
                                    <button className="red" onClick={() => remove(a.id)}><AiFillDelete /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}