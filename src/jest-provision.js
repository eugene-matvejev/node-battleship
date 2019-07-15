import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import fs from 'fs';
import orm from './orm';
import { typeDefs, resolvers } from './graphql';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({}),
    context: () => ({ orm }),
});

const { query, mutate } = createTestClient(server);

const databaseReset = async () => {
    await orm
        .sequelize
        .drop()
        .then(
            async () => {
                const proxyRequire = (path) => {
                    const modulePath = require.resolve(path);
                    const moduleExport = require(modulePath)

                    return moduleExport
                };

                const executeFiles = async (path) => {
                    const acc = [];
                    const files = fs.readdirSync(path);
                    for (const file of files) {
                        const f = `${path}/${file}`;

                        const migration = proxyRequire(f);
                        await migration.up(orm.sequelize.queryInterface, orm.Sequelize);

                        acc.push(f);
                    }

                    return acc;
                }

                const migrations = await executeFiles(`${__dirname}/../database/migrations`);
                const fixtures = await executeFiles(`${__dirname}/../database/fixtures`);

                console.log({ migrations, fixtures });
            }
        )
};

global.server = server;
global.query = query;
global.mutate = mutate;
global.databaseReset = databaseReset;

global.iter = 125;

beforeAll(databaseReset);
