import { Route, Routes } from 'react-router-dom';
import Login from './authorization/Login';
import Signup from './authorization/Signup';
import Products from './products/Products';
import Dashboard from './components/Dashboard';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
}

export function RouterAuth() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}