
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// components & containers
import EditorToolbar from '../../components/EditorToolbar/EditorToolbar.jsx';
import EditorInput from '../../components/EditorInput/EditorInput.jsx';

// styles
import classes from '../../styles/App.scss';
import classes2 from './Editor.scss';

class Editor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            postSaved: false,
            isLoaded: false,
            isUpdate: false,
            isDelete: false,
            deleted: false,
            article_id: null
        };
        
        this.apiEndpoint = "http://localhost:8081";
        this.apiCreateUpdateArticle = this.apiEndpoint + "/article/create";
        this.apiViewArticle = this.apiEndpoint + "/article/" +
            props.match.params.id;

        // is this an edit?
        if (props.location.pathname.match(/edit/)) {
            this.apiCreateUpdateArticle = this.apiEndpoint + "/article/update";
            this.state.isUpdate = true;
            this.state.article_id = props.match.params.id;
        }
        
        // is this a delete?
        if (props.location.pathname.match(/delete/)) {
            this.apiCreateUpdateArticle = this.apiEndpoint + "/article/delete";
            this.state.isDelete = true;
            this.state.article_id = props.match.params.id;
        }
        
        // methods
        this.saveCallback = this.saveCallback.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value });
    }

    saveCallback(body) {
        console.log('saveCallback');

        let article_title = this.state.title;
        let article_body = body;
        console.log(article_title, article_body);
        
        if (article_title == "") {
            alert("Title is required");
            return;
        }
        if (article_body == "") {
            alert("Body is required");
            return;
        }

        axios.post(this.apiCreateUpdateArticle, {
                article_id: this.state.article_id,
                title: article_title,
                body: article_body
            })
            .then(res => {
                console.log({res});
                this.setState({ postSaved: true, article_id: res.data.article_id });
            });
    }

    render() {

        if (this.state.deleted) {
            return(<Redirect to="/" />);
        }
        if (this.state.postSaved) {
            return(<Redirect to={"/view-article/" + this.state.article_id} />);
        }

        return(
            <div className="editor">
                <div className="editor-title">
                    <h4>Title</h4>
                    <input size="50" value={this.state.title}
                           onChange={this.handleChange} />
                </div>
                <EditorToolbar />
                <EditorInput saveCallback={this.saveCallback}
                             article_body={this.state.body} />
            </div>
        );
    }

    componentDidMount() {
        if (this.state.isDelete) {
            axios.post(this.apiCreateUpdateArticle, {
                    article_id: this.state.article_id
                })
                .then(res => {
                    console.log({res});
                    this.setState({ deleted: true });
                });
        }
        else if (this.state.isUpdate) {
            axios.get(this.apiViewArticle)
                .then(res => {
                    console.log(res);

                    this.article = res.data.article[0];
                    this.state.title = this.article.title;
                    this.state.body = this.article.body;

                    // setting innerHTML
                    this.article.body = {
                        __html: this.article.body
                    };

                    this.setState({ isLoaded: true });
                });
        }
    }
}

export default Editor;
