
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import ListArticles from '../../containers/ListArticles/ListArticles.jsx';
import Editor from '../../containers/Editor/Editor.jsx';
import classes from './ToolBar.scss';

class ToolBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchStr: '',
            searchSubmit: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ searchStr: e.target.value });
    }

    render() {
        return(
            <div className="tool-bar">
                <ul>
                    <li><Link to="/">List Articles</Link></li>
                    <li><Link to="/new-article">New Article</Link></li>
                    <li>
                      <input type="text" value={this.state.searchStr}
                             onChange={this.handleChange} />
                        <Link to={"/search-article/"
                              + this.state.searchStr}>Search</Link>
                    </li>
                </ul>
            </div>
        );
    }

}

export default ToolBar;
