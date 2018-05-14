
import React, { Component } from 'react';

// components & containers
import ImageHolder from '../../containers/ImageHolder/ImageHolder.jsx';
import Header from '../../components/Header/Header.jsx';

// styles
import classes from '../../styles/App.scss';

// our gallery images
import img0020 from '../../img/IMG_0020.jpg';
import img0022 from '../../img/IMG_0022.jpg';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const and let
        const images = [ img0020, img0022 ];
        let imageHolders = []
        let i = 1;

        images.forEach(img => { // ES6 arrow function
            imageHolders.push(<ImageHolder className="img-holder" src={img} key={i++} />);
        });

        return(
            <div className="app">
                <Header />
                <div className="wrapper">
                    {imageHolders}
                </div>
            </div>
        );
    }
}

export default App;
