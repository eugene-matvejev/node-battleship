export default {
    typeDefs: `
        extend type Query {
            game(id: ID!): Game
            games: [Game]
        }

        type Game {
            id: ID!
            battlefields: [Battlefield]!
        }
    `,
    resolvers: {
        Query: {
            game: (entity, args, { models }, info) => {
                return models.Game.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            games: (entity, args, { models }, info) => ({}),
        },
        Game: {
            battlefields: async (entity, args, { models }, info) => {
                debugger;
                const a = await models.Battlefield.findAll({
                    include: [
                        {
                            model: models.Game,
                            where: {
                                id: entity.id,
                            },
                        },
                    ],
                    raw: true,
                });
                debugger
                return a;
            },
        }
    },
}
