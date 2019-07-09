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
            user: (entity, args, { models }, info) => models.User.findAll({ raw: true }),
            users: (entity, args, { models }, info) => models.User.findAll({ raw: true }),
        },
        User: {
            friends: (entity, args, { models }, info) => models.User.findAll({ raw: true }),
        }
    },
}
