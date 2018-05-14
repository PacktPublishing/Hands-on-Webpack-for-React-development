
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// components & containers
import Header from '../../components/Header/Header.jsx';
import ImageHolder from '../../containers/ImageHolder/ImageHolder.jsx';
import UploadHolder from '../../containers/UploadHolder/UploadHolder.jsx';
import ImageStorage from '../../lib/ImageStorage.js';
import ImageViewer from '../../components/ImageViewer/ImageViewer.jsx';

// styles
import classes from '../../styles/App.scss';

class App extends Component {

    constructor(props) {
        super(props);

        // get images if existing
        this.storage = new ImageStorage();
        this.images = this.storage.getImages();
        this.displayIdx = 0;
        
        // App state
        this.state = {
            num_images: this.images.length,
            imageDisplay: false, // track whether we are displaying image
            selectMode: false,
            selectedImages: {}
        };

        this.selectAll = false;
        
        // callback for refresh
        this.reloadState = this.reloadState.bind(this);
        this.closeImage = this.closeImage.bind(this);
        this.deleteImages = this.deleteImages.bind(this);
        this.selectAllImages = this.selectAllImages.bind(this);
        this.selectMode = this.selectMode.bind(this);
    }

    selectMode() {
        this.setState({ selectMode: !this.state.selectMode });
    }

    selectAllImages() {

        if (!this.selectAll) {
            // need an object
            let si = {};
            for (let i=0; i < this.images.length; i++) {
                si[i] = true;
            }

            this.setState({ selectedImages: si });
            this.selectAll = true;
        }
        else {
            this.setState({ selectedImages: {} });
            this.selectAll = false;
        }

        console.log(this.state.selectedImages);
    }

    deleteImages() {
        let selectedImages = Object.keys(this.state.selectedImages);
        
        //let numImagesDeleted = 0;
        //selectedImages.forEach(idx => {
            this.storage.deleteImages(selectedImages);
            //numImagesDeleted++;
        //});

        this.setState({ num_images: this.state.num_images - selectedImages.length});
        this.setState({ selectedImages: {}, selectMode: false });
    }

    selectImage(idx) {
        if (idx in this.state.selectedImages) {
            // unselect
            console.log(`unselect ${idx}`);
            let selectedImages = this.state.selectedImages;
            delete selectedImages[idx];
            this.setState({ selectedImages: selectedImages });
        }
        else {
            // select image
            console.log(`select ${idx}`);
            let selectedImages = this.state.selectedImages;
            selectedImages[idx] = true;
            this.setState({ selectedImages: selectedImages });
        }

        console.log(this.state.selectedImages);
    }

    closeImage() {
        // setState renders the component
        this.setState({ imageDisplay: false });
    }
    
    displayImage(idx) {
        this.setState({ imageDisplay: true, displayIdx: idx });
    }
    
    reloadState() {
        this.setState({num_images: this.state.num_images + 1});
    }

    render() {
        console.log("render");

        this.images = this.storage.getImages();
    
        let imageHolders = [];
        let i = 0;

        this.images.forEach(img => { // ES6 arrow function
            let cStr = "";
            
            if (i in this.state.selectedImages) {
                cStr = <div onClick={this.selectImage.bind(this, i)}>
                    &#9989;
                    </div>;
            } else {
                cStr = <div onClick={this.selectImage.bind(this, i)}>
                    &#10063;
                    </div>;
            }

            let selectImage = "";
            if (this.state.selectMode) {
                selectImage = 
                    <div className="select-image">
                      {cStr}
                    </div>;
            }
            imageHolders.push(
                
                <div key={i + 's'}>
                    {selectImage}
                    <div
                        onClick={this.displayImage.bind(this, i)}
                        key={i}>

                        {/* Imageholder for each image */}
                        <ImageHolder
                            reload={this.reloadState}
                            idx={i}
                            className="img-holder"
                            src={img.data}
                            storage={this.storage} />
                    </div>
                </div>
            );
            i++;
        });

        let imageDisplay = [];

        if (this.state.imageDisplay) {
            // display the full image
            imageDisplay.push(
                <ImageViewer images={this.images} displayIdx={this.state.displayIdx}
                        key="1"
                        closeImage={this.closeImage} />
            );
        }
        else {
            // display thumbnails

            // select buttons
            let selectButtons = [];
            if (this.state.selectMode) {
                selectButtons.push(
                    <span key="1" className="delete-images" onClick={this.deleteImages}>Delete</span>
                );
                selectButtons.push(
                    <span key="2" className="select-all-images" onClick={this.selectAllImages}>Select All</span>
                );
                selectButtons.push(
                    <span key="3" className="select-all-images" onClick={this.selectMode}>Cancel</span>
                );
            } else {
                selectButtons.push(
                    <span className="select-mode" onClick={this.selectMode}>Select</span>
                );
            }
            imageDisplay.push(
                <div key="1">
                    <div className="select-header">
                        {selectButtons}
                    </div>
                    <div className="wrapper">
                        {imageHolders}
                        <UploadHolder reload={this.reloadState}
                            storage={this.storage} />
                    </div>
                </div>
            );
        }

        return(
            <div className="app">
                <Header />
                {imageDisplay}
            </div>
        );
    }
}

export default hot(module)(App);
