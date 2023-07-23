import './Users.css';
import { useState } from 'react';
import UsersTable from './UsersTable';
import UsersCards from './UsersCards';
import UsersList from './UsersList';

export default function Users() {
    const [display, setDisplay] = useState('table'); // table / list / cards

    return (
        <>
            <div className='display'>
                <button onClick={() => setDisplay('table')}>טבלה</button>
                <button onClick={() => setDisplay('cards')}>כרטיסים</button>
                <button onClick={() => setDisplay('list')}>רשימה</button>
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