import { useState } from 'react';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';

function App() {
    const [user, setUser] = useState();
    

    return (
        <div className="App">
            <Navbar />
            <Router />
        </div>
    );
}

export default App;
