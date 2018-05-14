
import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// components & containers
import Header from '../../components/Header/Header.jsx';
import ToolBar from '../../components/ToolBar/ToolBar.jsx';
import Editor from '../../containers/Editor/Editor.jsx';
import ListArticles from '../../containers/ListArticles/ListArticles.jsx';
import SearchArticles from '../../containers/SearchArticles/SearchArticles.jsx';
import Article from '../../containers/Article/Article.jsx';

// styles
import classes from '../../styles/App.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <HashRouter>
                <div className="app">
                    <Header />
                    <ToolBar />

                    <Route exact path="/" component={ListArticles} />
                    <Route path="/search-article/:searchStr" component={SearchArticles} />
                    <Route path="/new-article" component={Editor} />
                    <Route path="/view-article/:id" component={Article} />
                    <Route path="/edit-article/:id" component={Editor} />
                    <Route path="/delete-article/:id" component={Editor} />
                </div>
            </HashRouter>
        );
    }
}

export default hot(module)(App);
