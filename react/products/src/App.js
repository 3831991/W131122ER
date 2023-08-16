import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './products/Products';
import Login from './user/Login';
import Loader from './components/Loader';

export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(data => {
            setUser(data);
            setIsLogged(true);
        })
        .catch(err => {
            setUser();
            setIsLogged(false);
        })
        .finally(() => {
            setIsLoader(false);
        });
    }, []);

    return (
        <GeneralContext.Provider value={{ setIsLoader, user, setUser, isLogged, setIsLogged }}>
            {
                isLogged === undefined && 
                <div className="App">
                    <h1>ניהול מוצרים</h1>

                    <div className="frame">
                        {isLogged ? <Products /> : <Login />}
                        {isLoader && <Loader />}
                    </div>
                </div>
            }
        </GeneralContext.Provider>
    );
}

export default App;
