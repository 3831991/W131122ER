import './News.css';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GeneralContext } from '../App';

export default function NewsPage() {
    const [article, setArticle] = useState();
    const [error, setError] = useState(false);
    const { id } = useParams();
    const { snackbar, setIsLoader } = useContext(GeneralContext);

    useEffect(() => {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles/${id}?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`)
        .then(res => res.json())
        .then(data => {
            setArticle(data);
            setIsLoader(false);
        });
    }, []);

    return (
        <div className='NewsPage'>
            {
                article ?
                <div className='article'>
                    <h3>{article.headline}</h3>
                    <p>{article.description}</p>
                    <img src={article.imgUrl} width="100%" />
                    <p>{article.content}</p>
                </div> :
                <p className='article'>טוען...</p>
            }
        </div>
    )
}