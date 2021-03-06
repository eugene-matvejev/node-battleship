const orm = {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
};
const test = {
    ...orm,
    logging: false,
    dialect: 'sqlite',
    storage: `${__dirname}/../var/database-${process.pid}.sqlite`,
};

module.exports = {
    development: orm,
    production: orm,
    'undefined': orm,
    test,
}
