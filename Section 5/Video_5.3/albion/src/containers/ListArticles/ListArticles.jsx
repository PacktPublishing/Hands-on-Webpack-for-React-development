
import React, { Component } from 'react';
import ListArticle from '../../components/ListArticle/ListArticle.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import axios from 'axios';

// styles
import classes from './ListArticles.scss';

class ListArticles extends Component {

    constructor(props) {
        super(props);

        this.apiEndpoint = "http://localhost:8081";
        this.apiListArticles = this.apiEndpoint + "/articles";
        
        this.state = {
            isLoaded: false
        };
        
        this.articles = [];
    }

    render() {

        let articlesR = [];
        let i = 1;

        this.articles.forEach((a) => {
            articlesR.push(<li key={i}><ListArticle title={a.title}
                           article_id={a.article_id} /></li>);
            i++;
        });
    
        if (!this.state.isLoaded) {
            return(<Spinner />);
        }

        return(
            <div className="">
              <h4>My Latest Musings</h4>
              <ul>
                {articlesR}
              </ul>
            </div>
        );
    }

    componentDidMount() {
        axios.get(this.apiListArticles)
            .then(res => {

                res.data.articles.forEach((a) => {
                    this.articles.push(a);
                });

                this.setState({ isLoaded: true });
            });
    }
}

export default ListArticles;

