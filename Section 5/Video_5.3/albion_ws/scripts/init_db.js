
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('albion.db');

db.run("DROP TABLE IF EXISTS articles;");
db.run("CREATE VIRTUAL TABLE articles USING FTS5(article_id, title, body, created_dt);");
