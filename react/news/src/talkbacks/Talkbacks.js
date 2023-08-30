import { useEffect, useState } from 'react';
import './Talkbacks.css';

export default function Talkbacks({ articleId }) {
    const [talkbacks, setTalkbacks] = useState([]);

    useEffect(() => {
        fetch(`https://api.shipap.co.il/articles/${articleId}/talkbacks?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`)
        .then(res => res.json())
        .then(data => {
            setTalkbacks(data);
        });
    }, []);

    return (
        <div>תגובות לכתבה {articleId}</div>
    )
}