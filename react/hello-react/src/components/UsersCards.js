import { users } from "./UsersData";
import moment from "moment";

export default function UsersCards() {
    users.forEach(u => {
        u.age = moment().diff(u.birthday, 'years');
    });

    const maxAge = Math.max(...users.map(u => u.age));
    const minAge = Math.min(...users.map(u => u.age));

    return (
        <div className="cardFrame">
        {
            users.map(u => 
                <div className={'card' + (u.age === maxAge ? ' max-age' : '') + (u.age === minAge ? ' min-age' : '')} key={u.id}>
                    <p><b>{u.firstName} {u.lastName}</b></p>
                    <p><b>טלפון:</b> {u.phone}</p>
                    <p><b>אימייל:</b> {u.email}</p>
                    <p><b>תאריך לידה:</b> {moment(u.birthday).format('DD/MM/YYYY')}</p>
                    <p><b>גיל:</b> {u.age}</p>
                </div>    
            )
        }
        </div>
    )
}