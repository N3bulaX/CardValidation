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
