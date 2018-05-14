
import React, { Component } from 'react';

// components
import ImageView from '../../components/ImageView/ImageView.jsx';

// styles
import classes from './ImageHolder.scss';

class App extends Component {

    constructor(props) {
        super(props);

        // our methods
    }

    render() {

        return(
            <div className="image-holder">
                <ImageView src={this.props.src} />
            </div>
        );
    }
}

export default App;
