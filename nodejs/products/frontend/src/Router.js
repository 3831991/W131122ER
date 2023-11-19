import { Route, Routes } from 'react-router-dom';
import Products from './Products';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
        </Routes>
    );
}
