
import React, { Component } from 'react';

// components & containers
import EditorToolbar from '../../components/EditorToolbar/EditorToolbar.jsx';
import EditorInput from '../../components/EditorInput/EditorInput.jsx';

// styles
import classes from '../../styles/App.scss';
import classes2 from './Editor.scss';

class Editor extends Component {

    constructor(props) {
        super(props);

        // ref to our editor content
        this.editor = React.createRef();
        
        // methods
    }

    render() {
        return(
            <div className="editor">
              <EditorToolbar />
              <EditorInput />
            </div>
        );
    }
}

export default Editor;
