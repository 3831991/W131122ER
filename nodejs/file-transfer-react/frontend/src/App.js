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

    const upload = ev => {
        const form = new FormData();
        const file = ev.target.files[0];
        form.append("myImage", file);

        fetch(`http://localhost:9999/upload`, {
            method: 'POST',
            body: form,
        })
        .then(() => {
            setImages([...images, file.name]);
            ev.target.value = '';
        });
    }

    return (
        <div className="App">
            <div className='gallery'>
                {
                    images.map((image, i) => 
                        <div key={image} className='image' style={{ backgroundImage: `url(http://localhost:9999/file/${image})` }}>
                            <button className='remove' onClick={() => remove(image)}>מחק</button>
                        </div>
                    )
                }
            </div>

            <div>
                <input type="file" onInput={upload} />
            </div>
        </div>
    );
}

export default App;
