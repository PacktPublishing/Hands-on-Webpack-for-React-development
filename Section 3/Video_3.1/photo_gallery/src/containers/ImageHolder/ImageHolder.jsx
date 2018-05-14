
import React, { Component } from 'react';

// components
import ImageView from '../../components/ImageView/ImageView.jsx';

// styles
import classes from './ImageHolder.scss';

class ImageHolder extends Component {

    constructor(props) {
        super(props);

        // our methods
        this.deleteImage = this.deleteImage.bind(this);
    }

    deleteImage(e) {
        e.stopPropagation();
        this.props.storage.deleteImage(this.props.idx);
        this.props.reload();
    }

    render() {
        return(
            <div className="image-holder">
                <div onClick={this.deleteImage}
                    className="btn btn-danger btn-sm delete-button">
                    <i className="fas fa-trash"></i>
                </div>
                <ImageView src={this.props.src} />
            </div>
        );
    }
}

export default ImageHolder;
