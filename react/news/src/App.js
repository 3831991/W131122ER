import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import Loader from './components/Loader';
import Snackbar from './components/Snackbar';

export const GeneralContext = React.createContext();

function App() {
    const [isLoader, setIsLoader] = useState(true);
    const [snackbarText, setSnackbarText] = useState('');

    const snackbar = text => {
        setSnackbarText(text);
        setTimeout(() => setSnackbarText(''), 3 * 1000);
    }

    return (
        <GeneralContext.Provider value={{ setIsLoader, snackbar }}>
            <div className="App">
                <h1>אתר חדשות שלי</h1>
                <Router />
                {isLoader && <Loader />}
                {snackbarText && <Snackbar text={snackbarText} />}
            </div>
        </GeneralContext.Provider>
    );
}

export default App;
