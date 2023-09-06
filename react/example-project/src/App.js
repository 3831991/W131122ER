import { useState, createContext } from 'react';
import './App.css';
import Router from './Router';
import Navbar, { RoleTypes } from './components/Navbar';
import Loader from './components/Loader';

export const GeneralContext = createContext();

function App() {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);
    const [userRoleType, setUserRoleType] = useState(RoleTypes.none);

    return (
        <GeneralContext.Provider value={{ user, setUser, setLoader, userRoleType, setUserRoleType }}>
            <Navbar />
            <Router />
            {loader && <Loader />}
        </GeneralContext.Provider>
    );
}

export default App;
