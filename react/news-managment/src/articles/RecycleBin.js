import { useContext, useEffect, useState } from 'react';
import './Articles.css';
import moment from 'moment';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../App';
import { FaRecycle } from 'react-icons/fa6';

export default function RecycleBin() {
    const [articles, setArticles] = useState([]);
    const { snackbar, setIsLoader } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles/recycle-bin`, {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            setArticles(data);
            setIsLoader(false);
        });
    }, []);

    function restore(articleId) {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles/restore/${articleId}`, {
            credentials: 'include',
            method: 'PUT',
        })
        .then(() => {
            setArticles(articles.filter(a => a.id != articleId));
            setIsLoader(false);
        });
    }

    return (
        <>
            <div className='btnFrame'>
                <button className='returnLink' onClick={() => navigate('/')}><AiOutlineRight /> חזרה</button>
            </div>

            <h2>סל המחזור</h2>

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
                            <tr key={a.id}>
                                <td>{i + 1}</td>
                                <td>{a.headline}</td>
                                <td>{moment(a.addedTime).format('DD/MM/YY')}</td>
                                <td>{moment(a.publishDate).format('DD/MM')}</td>
                                <td>{a.views}</td>
                                <td>
                                    <button className="green" onClick={() => restore(a.id)}><FaRecycle /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}