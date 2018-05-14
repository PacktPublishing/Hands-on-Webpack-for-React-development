
import React, { Component } from 'react';

// components & containers

// styles
import classes from '../../styles/App.scss';
import classes2 from './EditorToolbar.scss';

class EditorToolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div className="tool-bar">
                ToolBar buttons go here
            </div>
        );
    }

}

export default EditorToolbar;
