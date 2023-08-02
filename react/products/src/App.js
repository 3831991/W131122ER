import './App.css';
import { useEffect, useState } from 'react';
import Products from './products/Products';
import Login from './user/Login';

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
        <div className="App">
            <h1>ניהול מוצרים</h1>

            <div className="frame">
                {
                    isLogged ? <Products /> : <Login />
                }
            </div>
        </div>
    );
}

export default App;
