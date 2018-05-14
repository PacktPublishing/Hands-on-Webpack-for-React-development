
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import classes from './ImageViewer.scss';

class ImageViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayIdx: this.props.displayIdx
        };
    }

    changeDisplay(toIdx) {

        if (toIdx == -1 && !this.prevDisplay) {
            return;
        }

        if (toIdx == 1 && !this.nextDisplay) {
            return;
        }

        this.setState({ displayIdx: this.state.displayIdx + toIdx });
    }

    updateIdx() {
        this.prevDisplay = this.state.displayIdx > 0 ? true : false;
        this.nextDisplay = this.state.displayIdx < this.props.images.length - 1 ?
            true: false;
    }
    
    render() {
    
        this.updateIdx();
    
        return(
            <div className="image-display-container">

            {/* prev image */}
            <div className="image-control image-prev"
                onClick={() => this.changeDisplay(-1)}>
                <i className="fas fa-arrow-left fa-lg" />
            </div>

            {/* current image */}
            <img className="image-display"
            src={this.props.images[this.state.displayIdx].data} />

            {/* next image */}
            <div className="image-control image-next"
                onClick={() => this.changeDisplay(1)}>
                <i className="fas fa-arrow-right fa-lg" />
            </div>

            {/* close image */}
            <div className="close-image"
                onClick={this.props.closeImage}>
                <i className="fas fa-times-circle fa-lg" />
            </div>
            </div>
        );
    }
}

export default ImageViewer;
