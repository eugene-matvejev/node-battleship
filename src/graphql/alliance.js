export default {
    typeDefs: `
        extend type Query {
            alliance(id: ID!): Alliance
            alliances: [Alliance]
        }

        type Alliance {
            name: String!
            guilds: [Guild]!
        }
    `,
    resolvers: {
        Query: {
            alliance: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
            alliances: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        },
        Alliance: {
            guilds: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        }
    },
}
