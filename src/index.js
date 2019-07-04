import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';
import models from './models';

models
    .sequelize
    .sync({
        // force: true
    })
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
