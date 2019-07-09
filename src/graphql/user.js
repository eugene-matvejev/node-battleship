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
            user: (entity, args, { models }, info) => {
                return models.User.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            users: (entity, args, { models }, info) => {
                return models.User.findAll({
                    raw: true,
                });
            },
        },
        User: {
            friends: (entity, args, { models }, info) => {
                return models.User.findAll({
                    include: [
                        {
                            attributes: [],
                            model: models.User,
                            as: 'friendship_owner',
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
