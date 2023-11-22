import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import ProductEdit from './ProductEdit';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductEdit />} />
        </Routes>
    );
}
