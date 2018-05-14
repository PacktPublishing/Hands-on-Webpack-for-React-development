
import React, { Component } from 'react';

// components & containers

// styles
import classes from '../../styles/App.scss';
import classes2 from './EditorInput.scss';

class EditorInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return( 
            <div>
                <div className="editor-input"
                    contentEditable={true}>
                </div>
                <div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </div>
        );
    }

}

export default EditorInput;
