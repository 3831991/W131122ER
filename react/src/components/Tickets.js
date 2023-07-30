import { useEffect, useState } from 'react';
import moment from "moment";
import './Tickets.css';

export default function Tickets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.shipap.co.il/contact")
            .then(res => res.json())
            .then(tickets => {
                setData(tickets);
            });
    }, []);

    return (
        <div className="Tickets">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>תאריך</th>
                        <th>שם מלא</th>
                        <th>טלפון</th>
                        <th>אימייל</th>
                        <th>הודעה</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((t, i) => 
                        <tr>
                            <td>{i + 1}</td>
                            <td>{moment(t.createTime).format('D.M.YY')}</td>
                            <td>{t.fullName}</td>
                            <td>{t.phone}</td>
                            <td>{t.email}</td>
                            <td>{t.message}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}