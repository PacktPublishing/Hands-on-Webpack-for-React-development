
import React, { Component } from 'react';

// components & containers

// styles
import classes from '../../styles/App.scss';
import classes2 from './EditorToolbar.scss';

class EditorToolbar extends Component {

    constructor(props) {
        super(props);
    }

    handleFormat(cmd) {
        document.execCommand(cmd, false, null);
    }

    handleHeading(heading) {
        document.execCommand('formatBlock', false, heading);
    }

    render() {
        return( 
            <div className="tool-bar">
                <button className="btn"
                    onClick={() => this.handleHeading('h1')}>H1</button>
                <button className="btn"
                    onClick={() => this.handleHeading('h2')}>H2</button>
                <button className="btn"
                    onClick={() => this.handleHeading('h3')}>H3</button>
                <button className="btn"
                    onClick={() => this.handleFormat('bold')}>B</button>
                <button className="btn"
                    onClick={() => this.handleFormat('italic')}>I</button>
                <button className="btn"
                    onClick={() => this.handleFormat('underline')}>U</button>
                <button className="btn"
                    onClick={() => this.handleFormat('insertOrderedList')}>OL</button>
                <button className="btn"
                    onClick={() => this.handleFormat('insertUnorderedList')}>UL</button>
                <button className="btn"
                    onClick={() => this.handleFormat('justifyLeft')}>
                        <i className='fa fa-align-left'></i>
                </button>
                <button className="btn"
                    onClick={() => this.handleFormat('justifyCenter')}>
                        <i className='fa fa-align-center'></i>
                </button>
                <button className="btn"
                    onClick={() => this.handleFormat('justifyRight')}>
                        <i className='fa fa-align-right'></i>
                </button>
            </div>
        );
    }

}

export default EditorToolbar;
