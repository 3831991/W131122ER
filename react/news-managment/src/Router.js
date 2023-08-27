import { Route, Routes } from 'react-router-dom';
import Articles from './articles/Articles';
import ArticlesEdit from './articles/ArticlesEdit';
import Login from './authorization/Login';
import Signup from './authorization/Signup';
import RecycleBin from './articles/RecycleBin';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:id" element={<ArticlesEdit />} />
            <Route path="/recycle-bin" element={<RecycleBin />} />
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