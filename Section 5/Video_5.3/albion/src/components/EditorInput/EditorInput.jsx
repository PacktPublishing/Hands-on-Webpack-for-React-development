
import React, { Component } from 'react';

// components & containers

// styles
import classes from '../../styles/App.scss';
import classes2 from './EditorInput.scss';

class EditorInput extends Component {

    constructor(props) {
        super(props);

        // ref to our editor content
        this.editor = React.createRef();
        
        // methods
        this.save = this.save.bind(this);
    }

    save() {
        const node = this.editor.current;
        this.props.saveCallback(node.innerHTML);
    }

    render() {

        let body = { __html: this.props.article_body };
        
        return( 
            <div>
                <div className="editor-input" ref={this.editor} 
                    contentEditable={true} dangerouslySetInnerHTML={body} >
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

}

export default EditorInput;
