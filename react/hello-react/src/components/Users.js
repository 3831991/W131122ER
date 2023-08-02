import './Users.css';
import { useEffect, useState } from 'react';
import UsersTable from './UsersTable';
import UsersCards from './UsersCards';
import UsersList from './UsersList';

export default function Users() {
    const [display, setDisplay] = useState('table'); // table / list / cards

    useEffect(() => {
        if (localStorage.display) {
            setDisplay(localStorage.display);
            localStorage.removeItem('display');
        }
    }, []);

    useEffect(() => {
        localStorage.display = display;
    }, [display]);

    return (
        <>
            <div className='display'>
                <button onClick={() => setDisplay('table')} className={display === 'table' ? 'active' : ''}>טבלה</button>
                <button onClick={() => setDisplay('cards')} className={display === 'cards' ? 'active' : ''}>כרטיסים</button>
                <button onClick={() => setDisplay('list')} className={display === 'list' ? 'active' : ''}>רשימה</button>
            </div>

            {
                // פונקציה אנונימית הקוראת לעצמה
                (() => {
                    switch (display) {
                        case 'table' : return <UsersTable />;
                        case 'cards' : return <UsersCards />;
                        case 'list' : return <UsersList />;
                    }
                })()
            }
        </>
    )
}