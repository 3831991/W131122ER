import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Gallery from './components/Gallery';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;