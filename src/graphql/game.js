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
            games: (entity, args, { models }, info) => {
                return models.Game.findAll({
                    raw: true,
                });
            },
        },
        Game: {
            battlefields: (entity, args, { models }, info) => {
                return models.Battlefield.findAll({
                    include: [
                        {
                            attributes: [],
                            model: models.Game,
                            where: {
                                id: entity.id,
                            },
                        },
                    ],
                    raw: true,
                });
            },
        }
    },
}
