import { useEffect, useState, createContext } from 'react';
import './App.css';
import { Router, RouterAuth } from './Router';
import Navbar from './components/Navbar';
import Logout from './authorization/Logout';

export const GeneralContext = createContext();

function App() {
    const [user, setUser] = useState();

    useEffect(() => {
        fetch("http://localhost:4000/login", {
            credentials: 'include',
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(x => {
                    throw new Error(x.message);
                });
            }
        })
        .then(data => setUser(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <GeneralContext.Provider value={{ user, setUser }}>
            <div className="App">
                <h1>Full Stack</h1>

                { user && <Logout /> }

                <div className="frame">
                    { user && <Navbar /> }
                    { user ? <Router /> : <RouterAuth />}
                </div>
            </div>
        </GeneralContext.Provider>
    );
}

export default App;
