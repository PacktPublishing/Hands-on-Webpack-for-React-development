
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import classes from './Spinner.scss';

class Spinner extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div id="spinner">
              <img src="img/spinner.gif" />
            </div>
        );
    }

}

export default Spinner;
