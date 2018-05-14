
import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                Albion - Blogging App v1.1
            </div>
        );
    }

}

export default Header;
