
import React, { Component } from 'react';
import classes from './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                Cactus - Photo Gallery App v1.2
            </div>
        );
    }

}

export default Header;
