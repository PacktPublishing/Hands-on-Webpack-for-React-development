
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components & containers

// styles
import classes from './ListArticle.scss';

class ListArticle extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="list-article">
              <Link to={"/view-article/" + this.props.article_id}>
                    <h5>{this.props.title}</h5>
                </Link>
            </div>
        );
    }

}

export default ListArticle;
