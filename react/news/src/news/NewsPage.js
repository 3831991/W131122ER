import './News.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function NewsPage() {
    const [article, setArticle] = useState();

    console.log(useParams());

    useEffect(() => {
        // fetch(`https://api.shipap.co.il/articles/${}?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`)
        // .then(res => res.json())
        // .then(data => {
        //     setArticle(data);
        // });
    }, []);

    return (
        <div className='NewsPage'>

        </div>
    )
}