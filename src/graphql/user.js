export default {
    typeDefs: `
        extend type Query {
            user(id: ID!): User
            users: [User]
        }

        type User {
            id: ID!
            email: String!
            friends: [User]
        }
    `,
    resolvers: {
        Query: {
            user: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
            users: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        },
        User: {
            friends: (entity, _1, { models }, _3) => models.User.findAll({ raw: true }),
        }
    },
}
