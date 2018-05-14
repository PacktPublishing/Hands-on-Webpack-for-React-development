
import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                Albion - Blogging App v1.0
            </div>
        );
    }

}

export default Header;
