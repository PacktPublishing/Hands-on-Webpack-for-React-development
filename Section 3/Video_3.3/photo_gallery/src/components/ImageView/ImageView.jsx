
import React, { Component } from 'react';
import classes from './ImageView.scss';

class ImageView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img className="image-view" src={this.props.src} />
            </div>
        );
    }

}

export default ImageView;
