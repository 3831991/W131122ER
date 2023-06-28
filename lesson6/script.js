class Gallery {
    images = [];
    imgElem;
    currentImage = -1;

    constructor(elemId, ...imageUrls) {
        this.images = imageUrls;

        const galleryElem = document.getElementById(elemId);
        galleryElem.classList.add("gallery");

        // יצירת אלמנט של התמונה
        this.imgElem = document.createElement("img");

        // הוספת אירועים לתמונות
        this.imgElem.addEventListener('click', () => this.nextImage());
        this.imgElem.addEventListener('contextmenu', ev => {
            ev.preventDefault();
            this.prevImage();
        });

        // הוספת התמונה לדף
        galleryElem.appendChild(this.imgElem);

        // לצורך הצגת התמונה הראשונה
        this.nextImage();
    }

    nextImage() {
        this.currentImage++;

        if (this.currentImage >= this.images.length) {
            this.currentImage = 0;
        }

        this.imgElem.src = this.images[this.currentImage];
    }

    prevImage() {
        this.currentImage--;

        if (this.currentImage < 0) {
            this.currentImage = this.images.length - 1;
        }

        this.imgElem.src = this.images[this.currentImage];
    }
}

const g1 = new Gallery("gallery1", "./images/תמונה (1).jpg", "./images/תמונה (2).jpg", "./images/תמונה (3).jpg", "./images/תמונה (4).jpg", "./images/תמונה (5).jpg", "https://www.photo-art.co.il/wp-content/uploads/2018/09/J75_5568-1.jpg");
const g2 = new Gallery("gallery2", "./images/תמונה (11).jpg", "./images/תמונה (12).jpg", "./images/תמונה (13).jpg", "./images/תמונה (14).jpg", "./images/תמונה (15).jpg", "./images/תמונה (16).jpg", "./images/תמונה (17).jpg");
