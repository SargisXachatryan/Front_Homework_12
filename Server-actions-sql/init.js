const Database = require("better-sqlite3")

const db = new Database("courses.db")

db.exec("DROP TABLE IF EXISTS courses")
db.exec(`
    CREATE TABLE IF NOT EXISTS courses(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER,
    duration INTEGER,
    cover TEXT
    )
    `)