import { ApolloServer, gql } from 'apollo-server';
import models from './models';

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

const resolvers = {
    Query: {
        users: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
    },
    User: {
        friends: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
    }
};

models
    .sequelize
    // .sync({ force: true })
    .sync()
    .then(() => {
        new ApolloServer({
            typeDefs,
            resolvers,
            context: {
                models,
            }
        })
            .listen(process.env.PORT)
            .then(({ url }) => {
                console.log(`🚀 Server ready at ${url}`);
            });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

