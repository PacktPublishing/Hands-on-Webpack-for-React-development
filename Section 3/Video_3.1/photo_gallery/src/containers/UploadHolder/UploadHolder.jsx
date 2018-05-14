
import React, { Component } from 'react';

// components
import ImageStorage from '../../lib/ImageStorage.js';

// styles
import classes from './UploadHolder.scss';

class UploadHolder extends Component {

    constructor(props) {
        super(props);

        // our storage
        this.storage = new ImageStorage();

        // our methods
        this.fileSelect = this.fileSelect.bind(this);
    }

    fileSelect(e) {

        // e.target.file is a FIleList object
        // we need to co-erce it into an array
        Array.from(e.target.files).forEach(file => {

             // Only process image files
            if (file.type.match('image.*')) {

                let reader = new FileReader();
                
                // this is called when the entire file is read
                reader.onload = f => {

                    // save image
                    let ret 
                        = this.props.storage.saveImage(f.target.result, file.name);
		    
                    // inform parent
                    this.props.reload();
                };

                // start reading the file
                reader.readAsDataURL(file);
            }
        });
    }

    render() {

        return(
            <div className="upload-holder">
              <input type="file" id="files" name="files" multiple
                     onChange={this.fileSelect}/>
                <label htmlFor="files" 
                className="input-file">Click to select files</label>
            </div>
        );
    }
}

export default UploadHolder;
