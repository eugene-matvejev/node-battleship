export default {
    typeDefs: `
        extend type Query {
            game(id: ID!): Game
            games: [Game]
        }

        type Game {
            name: ID!
            players: [User]!
        }
    `,
    resolvers: {
        Query: {
            game: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
            games: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        },
        Game: {
            players: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        }
    },
}
