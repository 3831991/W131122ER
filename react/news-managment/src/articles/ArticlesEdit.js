import { useParams } from 'react-router-dom';
import './Articles.css';

export default function ArticlesEdit() {
    const { id } = useParams(); 

    

    return (
        <p>עריכת כתבה</p>
    )
}