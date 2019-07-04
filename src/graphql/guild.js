export default {
    typeDefs: `
        extend type Query {
            guild(id: ID!): Guild
            guilds: [Guild]
        }

        type Guild {
            name: String!
            users: [User]!
        }
    `,
    resolvers: {
        Query: {
            user: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
            users: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        },
        Guild: {
            users: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        }
    }
}
