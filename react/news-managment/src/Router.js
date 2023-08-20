import { Route, Routes } from 'react-router-dom';
import Articles from './articles/Articles';
import ArticlesEdit from './articles/ArticlesEdit';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:id" element={<ArticlesEdit />} />
        </Routes>
    );
}