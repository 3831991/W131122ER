import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Gallery from './components/Gallery';

function Router() {
    return (
        <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    );
}

export default Router;