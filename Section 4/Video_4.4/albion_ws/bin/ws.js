
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('albion.db');

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('OK');
});

// get all articles
app.get('/articles', (req, res) => {

    console.log("/articles");
    get_articles((err, rows) => {
        let ret = {
            status: 'ok',
            articles: rows,
        };

        res.json(ret);
    })
});

function get_articles(cb) {
    db.all("SELECT * FROM articles;", [], (err, rows) => {
        cb(err, rows);
    });
}

// get a single article by id
app.get('/article/:articleId', (req, res) => {

    console.log("/article/" + req.params.articleId);
    get_article(req.params.articleId, (err, article) => {
        let ret = {
            status: 'ok',
            article: article,
        };

        res.json(ret);
    })
});

function get_article(articleId, cb) {
    db.all(`SELECT * FROM articles WHERE article_id = '${articleId}';`, [],
           (err, row) => {
                cb(err, row);
    });
}

// Create a new article
app.post('/article/create', (req, res) => {

    console.log("/article/create");
    create_article(req.body.title, req.body.body, (err, articleId) => {
        let ret = {
            status: 'ok',
            article_id: articleId
        };

        res.json(ret);
    })
});

function create_article(title, body, cb) {

    // get current date in yyyy-mm-dd hh:mm format
    let d = new Date();
    let dt = d.getFullYear() + "-"
        + ("0"+(d.getMonth()+1)).slice(-2) + "-"
        + ("0" + d.getDate()).slice(-2) + " "
        + ("0" + d.getHours()).slice(-2) + ":"
        + ("0" + d.getMinutes()).slice(-2);

    // increment the article_id
    let last_article_id;
    get_last_article_id((err, row) => {
        if (row.length == 0) {
            last_article_id = 1;
        }
        else {
            last_article_id = +row[0].article_id + 1;
        }

        db.all(`INSERT INTO articles (article_id, title, body, created_dt) VALUES('${last_article_id}', '${title}', '${body}', '${dt}');`, [], (err, row) => {
            cb(err, last_article_id);
        });
    });
}

function get_last_article_id(cb) {

    db.all("SELECT article_id FROM articles ORDER BY article_id DESC LIMIT 1;", [], (err, row) => {
        cb(err, row);
    });
}

// Update article
app.post('/article/update', (req, res) => {

    console.log("/article/update/" + req.body.article_id);
    update_article(req.body.article_id, req.body.title, req.body.body, (err, articleId) => {
        let ret = {
            status: 'ok',
            article_id: articleId
        };

        res.json(ret);
    })
});

function update_article(id, title, body, cb) {

    db.all(`UPDATE articles SET title='${title}', body='${body}' WHERE article_id = '${id}';`, [], (err, row) => {
        cb(err, id);
    });
}

// search article
app.get('/articles/search/:searchStr', (req, res) => {

    console.log("/articles/search");
    search_articles(req.params.searchStr, (err, articles) => {
        let ret = {
            status: 'ok',
            articles: articles,
        };

        res.json(ret);
    })
});

function search_articles(searchStr, cb) {

    db.all(`SELECT * FROM articles WHERE articles = '${searchStr}';`, [], (err, rows) => {
        cb(err, rows);
    });
}

// Delete article
app.post('/article/delete', (req, res) => {

    console.log("/article/delete");
    delete_article(req.body.article_id, (err, articleId) => {
        let ret = {
            status: 'ok',
        };

        res.json(ret);
    })
});

function delete_article(id, cb) {

    db.all(`DELETE FROM articles WHERE article_id = '${id}';`, [], (err, row) => {
        cb(err, row);
    });
}

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Albion service listening at http://%s:%s", host, port);
});

