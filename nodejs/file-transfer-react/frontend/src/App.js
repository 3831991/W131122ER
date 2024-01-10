import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9999/files")
        .then(res => res.json())
        .then(data=> setImages(data));
    }, []);

    const remove = image => {
        fetch(`http://localhost:9999/file/${image}`, {
            method: 'DELETE',
        })
        .then(() => {
            setImages(images.filter(img => img !== image));
        });
    }

    return (
        <div className="App">
            {
                images.map((image, i) => 
                    <div key={image} className='image' style={{ backgroundImage: `url(http://localhost:9999/file/${image})` }}>
                        <button className='remove' onClick={() => remove(image)}>מחק</button>
                    </div>
                )
            }
        </div>
    );
}

export default App;
