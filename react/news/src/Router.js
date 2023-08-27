import { Route, Routes } from 'react-router-dom';
import News from './news/News';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<News />} />
            {/* <Route path="/news/:id" element={<NewsPage />} /> */}
        </Routes>
    )
}