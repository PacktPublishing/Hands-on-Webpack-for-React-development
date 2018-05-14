
import React, { Component } from 'react';
import ArticleView from '../../components/ArticleView/ArticleView.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import ListArticles from '../../containers/ListArticles/ListArticles.jsx';
import axios from 'axios';

// styles
import classes from './Home.scss';

class Home extends Component {

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
            articlesR.push(<ArticleView key={i} article={a} />);
            i++;
        });
    
        if (!this.state.isLoaded) {
            return(<Spinner />);
        }

        if (articlesR.length == 0) {
            return("No articles found");
        }

        return(
            <div className="wrapper">
                <div className="list-articles">
                {articlesR}
                </div>
                <div className="link-articles">
                  <ListArticles />
                </div>
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

export default Home;

