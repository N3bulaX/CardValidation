// src/db/dbConfig.js
const mysql = require('mysql');
const dbConfig = require('../../config/herokuConfig');

const connection = mysql.createConnection({
    host: dbConfig.mysqlHost,
    user: dbConfig.mysqlUser,
    password: dbConfig.mysqlPassword,
    database: dbConfig.mysqlDatabase
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con MySQL:', err);
    } else {
        console.log('Conexión exitosa a MySQL');
    }
});

module.exports = connection;

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
