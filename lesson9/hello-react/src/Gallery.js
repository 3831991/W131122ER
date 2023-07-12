import { useState } from 'react';
import './Gallery.css';

function Gallery() {
    const [current, setCurrent] = useState(0);

    const images = [
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(1).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(2).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(3).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(4).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(5).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(6).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(7).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(8).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(9).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(10).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(11).jpg',
        'https://3831991.github.io/W050323ER/lesson19/simple-gallery/images/%D7%AA%D7%9E%D7%95%D7%A0%D7%94%20(12).jpg',
    ];

    function nextImage() {
        if (current >= images.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    }

    return (
        <div className="gallery">
            <img src={images[current]} onClick={nextImage} />
        </div>
    );
}

export default Gallery;