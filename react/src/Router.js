import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Settings from './components/Settings';
import Settings2 from './components/Settings2';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings2" element={<Settings2 />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;