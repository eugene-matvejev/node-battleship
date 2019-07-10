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
            game: (entity, args, { orm }, info) => {
                return orm.Game.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            games: (entity, args, { orm }, info) => {
                return orm.Game.findAll({
                    raw: true,
                });
            },
        },
        Game: {
            battlefields: (entity, args, { orm }, info) => {
                return orm.Battlefield.findAll({
                    include: [
                        {
                            attributes: [],
                            model: orm.Game,
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
