
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticleView from '../../components/ArticleView/ArticleView.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';

// styles
import classes from './Article.scss';

class Article extends Component {

    constructor(props) {
        super(props);

        this.apiEndpoint = "http://localhost:8081";
        this.apiViewArticle = this.apiEndpoint + "/article/" +
            props.match.params.id;
        
        this.state = {
            isLoaded: false
        };
        
        this.article = {};
    }

    render() {

        if (!this.state.isLoaded) {
            return(<Spinner />);
        }

        return(
            <div className="view-article">
                <div className="article-edit">
                  <span className="edit-article">
                    <Link to={"/edit-article/" + this.article.article_id}>
                        Edit
                    </Link>
                  </span>
                  <span className="edit-article">
                    <Link to={"/delete-article/" + this.article.article_id}>
                        Delete
                    </Link>
                  </span>
                </div>
                <ArticleView article={this.article} />
            </div>
        );
    }
    
    componentDidMount() {
        axios.get(this.apiViewArticle)
            .then(res => {
                console.log(res);

                this.article = res.data.article[0];

                this.setState({ isLoaded: true });
            });
    }
}

export default Article;
