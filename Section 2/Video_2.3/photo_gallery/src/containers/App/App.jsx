
import React, { Component } from 'react';

// components & containers
import ImageHolder from '../../containers/ImageHolder/ImageHolder.jsx';
import Header from '../../components/Header/Header.jsx';

// styles
import classes from '../../styles/App.scss';

// our gallery images
// get all images from 'img' folder and create a map with image filename as key
function importAll (r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../img/', false, /\.jpg$/));
console.log({images});

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // const and let
        let imageHolders = []
        let i = 1;

        Object.keys(images).forEach(img => { // ES6 arrow function
            imageHolders.push(<ImageHolder className="img-holder" key={i++} 
                src={images[img]} />);
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
