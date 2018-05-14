
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// components & containers
import Header from '../../components/Header/Header.jsx';
import Editor from '../../containers/Editor/Editor.jsx';

// styles
import classes from '../../styles/App.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="app">
                <Header />
                <Editor />
            </div>
        );
    }
}

export default hot(module)(App);
