const c = {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
};
const test = {
    ...c,
    dialect: 'sqlite',
    storage: `${__dirname}/../var/database-${process.pid}.sqlite`,
};

module.exports = {
    development: c,
    production: c,
    'undefined': c,
    test,
    secret: process.env.SECRET_KEY,
}
