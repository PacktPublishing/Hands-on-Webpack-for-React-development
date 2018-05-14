
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// styles
import classes from './ArticleView.scss';

class ArticleView extends Component {

    constructor(props) {
        super(props);

        // setting innerHTML
        this.article_body = {
            __html: this.props.article.body
        };
    }

    render() {

        return(
            <div className="view-article">
                <div className="title">
                  <Link to={"/view-article/" + this.props.article.article_id}>
                    {this.props.article.title}</Link>
                </div>
                <div className="article-date">
                  Posted at {this.props.article.created_dt}</div>
                <div className="body" dangerouslySetInnerHTML={this.article_body} />
            </div>
        );
    }
    
}

export default ArticleView;
