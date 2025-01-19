// config/herokuConfig.js

module.exports = {
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com',
    dbURI: process.env.DATABASE_URL || 'mysql://user:password@localhost/credit_cards',
    mysqlHost: process.env.MYSQL_HOST || 'localhost',
    mysqlUser: process.env.MYSQL_USER || 'root',
    mysqlPassword: process.env.MYSQL_PASSWORD || 'password',
    mysqlDatabase: process.env.MYSQL_DATABASE || 'credit_cards'
};
