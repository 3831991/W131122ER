import { GeneralContext } from '../App';
import Card from './Card';
import './News.css';
import { useState, useEffect, useContext } from 'react';

export default function News() {
    const [articles, setArticles] = useState([]);
    const { snackbar, setIsLoader } = useContext(GeneralContext);

    useEffect(() => {
        setIsLoader(true);

        fetch(`https://api.shipap.co.il/articles?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`)
        .then(res => res.json())
        .then(data => {
            setArticles(data);
            setIsLoader(false);
        });
    }, []);

    return (
        <div className='News'>
            {articles.map(a => <Card key={a.id} article={a} />)}
        </div>
    )
}