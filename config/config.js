const config = {
    host: process.env.DB_HOSTNAME || '127.0.0.1',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'game',
    dialect: 'mysql',
}

module.exports = {
    production: config,
    development: config,
    test: {
        dialect: 'sqlite',
        storage: '../var/database.sqlite'
    },
    secret: process.env.SECRET_KEY,
};
