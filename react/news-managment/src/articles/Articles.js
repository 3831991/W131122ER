import { GeneralContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import './Articles.css';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const { snackbar, setIsLoader } = useContext(GeneralContext);

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

    return (
        <>
            <p>ניהול כתבות</p>

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
                                    <button className="edit"><AiFillEdit /></button>
                                    <button className="remove"><AiFillDelete /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}