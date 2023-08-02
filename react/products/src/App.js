import './App.css';
import { useEffect, useState } from 'react';
import Products from './products/Products';
import Login from './user/Login';
import Logout from './user/Logout';

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();

    useEffect(() => {
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                setUser(data.user);
                setIsLogged(true);
            } else {
                setUser();
                setIsLogged(false);
            }
        });
    }, []);

    return (
        <>
            {
                isLogged === undefined ? '' : 
                <div className="App">
                    <h1>ניהול מוצרים</h1>

                    <div className="frame">
                        {
                            isLogged ?
                            <>
                                <div>{user.fullName} מחובר! <Logout /></div>
                                <Products />
                            </> :
                            <Login />
                        }
                    </div>
                </div>
            }
        </>
        
    );
}

export default App;
