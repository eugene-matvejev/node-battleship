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
            user: (entity, args, { orm }, info) => {
                return orm.User.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            users: (entity, args, { orm }, info) => {
                return orm.User.findAll({
                    raw: true,
                });
            },
        },
        User: {
            friends: (entity, args, { orm }, info) => {
                return orm.User.findAll({
                    include: [
                        {
                            attributes: [],
                            model: orm.User,
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
