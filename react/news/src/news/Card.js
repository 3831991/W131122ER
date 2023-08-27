import { Link } from 'react-router-dom';

export default function Card({ article }) {
    return (
        <Link to={`/article/${article.id}`}>
            <div>
                <img src={article.imgUrl} alt="image" />
                <header>{article.headline}</header>
                <footer>{article.description}</footer>
            </div>
        </Link>
    )
}