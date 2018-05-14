
// we save the images in an array
// To store this in localStorage, we need to stringify it
class ImageStorage {

    constructor() {
		// check existing
		let images_str = window.localStorage.cactus || '[]';
		
		this.images = JSON.parse(images_str);
    }

    saveImage(img, file_name) {
	
		this.images.push({
			name: file_name,
			data: img
		});
		
		this.updateStorage();
    }

    deleteImage(idx) {
		this.images.splice(idx, 1);
		this.updateStorage();
    }

    updateStorage() {
		window.localStorage.cactus = JSON.stringify(this.images);
    }

    getImages() {
		return this.images;
    }
}

export default ImageStorage;
