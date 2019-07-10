export default {
    typeDefs: `
        extend type Query {
            battlefield(id: ID!): Battlefield
            battlefields: [Battlefield]
        }

        type Battlefield {
            id: ID!
            owner: User!
            cells: [Cell]!
        }
    `,
    resolvers: {
        Query: {
            battlefield: (entity, args, { orm }, info) => {
                return orm.Battlefield.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            battlefields: (entity, args, { orm }, info) => {
                return orm.Battlefield.findAll({
                    raw: true,
                });
            },
        },
        Battlefield: {
            cells: (entity, args, { orm }, info) => {
                return orm.Cell.findAll({
                    include: [
                        {
                            attributes: [],
                            model: orm.Battlefield,
                            where: {
                                id: entity.id,
                            },
                        },
                    ],
                    raw: true,
                });
            },
            owner: (entity, args, { orm }, info) => {
                return orm.User.findOne({
                    include: [
                        {
                            attributes: [],
                            model: orm.Battlefield,
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
