import { useParams } from 'react-router-dom';
import './Articles.css';

export default function ArticlesEdit() {
    const { id } = useParams(); 



    return (
        <h3>עריכת כתבה {id}</h3>
    )
}