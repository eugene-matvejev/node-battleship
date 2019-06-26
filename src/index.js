const { ApolloServer, gql } = require('apollo-server');
const models = require('./models');
const crypto = require('crypto');
// const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/game');
models.sequelize
    // .sync({ force: true })
    .sync()
    // .authenticate()
    .then(() => {
        // const args = arguments;
        // console.log(args);
        // const a = crypto.createHmac('sha256', 'secret').update('password').digest('hex');

        // debugger;
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// The GraphQL schema
const typeDefs = gql`
    type Query {
        "A simple type for getting started!"
        hello: String
        allUsers: [User]
    }

    type User {
        id: ID!
        email: String!
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => {
            const ar = arguments;
            debugger;
            return 'world';
        },
        allUsers: (_0, _1, { models }, _3) => {
            debugger;

            return models.User.findAll({ raw: true });
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models,
    }
});

server.listen().then(({ url }) => {
    // debugger;
    console.log(`🚀 Server ready at ${url}`);
});