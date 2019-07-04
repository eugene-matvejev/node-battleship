module.exports = {
    database: {
        host: process.env.DB_HOSTNAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
    },
    secret: process.env.SECRET_KEY,
}
