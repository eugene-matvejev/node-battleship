const { ApolloServer, gql } = require('apollo-server');
const models = require('./models');

models.sequelize
    // .sync({ force: true })
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// The GraphQL schema
const typeDefs = gql`
    type Query {
        users: [User]
    }

    type User {
        id: ID!
        email: String!
        friends: [User]
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        users: (entity, _1, { models }, _3) => {
            debugger;

            return models.User.findAll({ raw: true });
        },
    },
    User: {
        friends: (entity, _1, { models }, _3) => {
            debugger;
            return models.User.findAll({ raw: true });
        }
    }
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
