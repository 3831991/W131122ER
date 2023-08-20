import React, { useEffect, useState } from 'react';
import './App.css';
import { Router, RouterAuth } from './Router';
import Loader from './components/Loader';
import Snackbar from './components/Snackbar';

export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLoader, setIsLoader] = useState(true);
    const [snackbarText, setSnackbarText] = useState('');

    const snackbar = text => {
        setSnackbarText(text);
        setTimeout(() => setSnackbarText(''), 3 * 1000);
    }

    useEffect(() => {
        fetch(`https://api.shipap.co.il/login`, {
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
        })
        .catch(err => {
            console.log(err.message);
        })
        .finally(() => setIsLoader(false));
    }, []);

    return (
        <div className="App">
            <h1>ניהול כתבות</h1>

            <div className="frame">
                {user ? <Router /> : <RouterAuth />}
                {isLoader && <Loader />}
                {snackbarText && <Snackbar text={snackbarText} />}
            </div>
        </div>
    );
}

export default App;
