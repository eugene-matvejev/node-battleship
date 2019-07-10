import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import fs from 'fs';
import orm from '../orm';
import { typeDefs, resolvers } from '../graphql';

describe('GraphQL Type: Cell', () => {
    // (new Uint8Array(2)).forEach((_, i) => {
    //     it(`fetch cell by ID ${i + 1}`, async () => {
    //         console.log('test execution')

    //         const result = await query(
    //             {
    //                 query: `
    //                 {
    //                     cell(id: 1) {
    //                         seq
    //                         id
    //                         coordinate
    //                     }
    //                 }`
    //             }
    //         );

    //         expect(result).toMatchSnapshot();
    //     });
    // });

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({}),
        context: () => ({ orm }),
    });

    const { query } = createTestClient(server);

    beforeEach(async () => {
        await orm
            .sequelize
            .drop()
            .then(
                async () => {
                    /** any better way of doing this? */
                    const proxyRequire = (path) => {
                        const module = {};

                        ((content, module) => eval(content))(fs.readFileSync(path, { encoding: 'utf8' }), module);

                        return module.exports;
                    };

                    const executeFiles = async (path) => {
                        const acc = [];
                        const files = fs.readdirSync(path);
                        for (const file of files) {
                            const f = `${path}/${file}`;

                            try {
                                const migration = proxyRequire(f);
                                debugger;
                                await migration.up(orm.sequelize.queryInterface, orm.Sequelize);
                            } catch (e) {
                                debugger;
                            }

                            acc.push(f);
                        }

                        return acc;
                    }

                    const migrations = await executeFiles(`${__dirname}/../../database/migrations`);
                    const fixtures = await executeFiles(`${__dirname}/../../database/fixtures`);

                    console.log('migrations finished');
                    console.log({ migrations, fixtures });
                }
            )
    })

    it('fetch cell by ID', async () => {
        console.log('test execution')

        const result = await query(
            {
                query: `
                {
                    cell(id: 1) {
                        seq
                        id
                        coordinate
                    }
                }`
            }
        );

        expect(result).toMatchSnapshot();
    });
});
