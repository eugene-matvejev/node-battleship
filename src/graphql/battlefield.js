export default {
    typeDefs: `
        extend type Query {
            battlefield(id: ID!): Game
            battlefields: [Game]
        }

        type Battlefield {
            id: ID!
            owner: User!
            cells: [Cell]!
        }
    `,
    resolvers: {
        Query: {
            battlefield: (entity, args, { models }, info) => {
                return models.Battlefield.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            battlefields: (entity, args, { models }, info) => {
                return models.Battlefield.findAll({
                    raw: true,
                });
            },
        },
        Battlefield: {
            cells: (entity, args, { models }, info) => {
                return models.Cell.findAll({
                    include: [
                        {
                            attributes: [],
                            model: models.Battlefield,
                            where: {
                                id: entity.id,
                            },
                        },
                    ],
                    raw: true,
                });
            },
            owner: (entity, args, { models }, info) => {
                return models.User.findOne({
                    include: [
                        {
                            attributes: [],
                            model: models.Battlefield,
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
