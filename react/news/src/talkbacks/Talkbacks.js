import { useEffect, useState } from 'react';
import moment from 'moment';
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
        <div className='Talkbacks'>
            <h3>תגובות</h3>
            {
                talkbacks.map((t, i) =>
                    <div key={t.id}>
                        <div className='talkbackContainer'>
                            <div className='grid'>
                                <div>
                                    <div className='circle' style={{backgroundColor: 'hsl('+ t.id * 40 +' 48% 47%)'}}>
                                        {t.name.slice(0,1)}
                                    </div>
                                </div>

                                <div>{t.name} <i>({moment(t.time).format('DD/MM/Y H:mm')})</i></div>
                                <div className='btnFrame'>
                                    <button style={{backgroundColor: 'hsl('+ t.id * 40 +' 48% 47%)'}}>הגב</button>
                                </div>
                                <div className='content'>{t.comment}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}