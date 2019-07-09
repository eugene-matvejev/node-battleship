export default {
    typeDefs: `
        extend type Query {
            cell(id: ID!): Cell
            cells: [Cell]
        }

        type Cell {
            id: ID!
            seq: Int!
            coordinate: String!
            battlefield: Battlefield!
        }
    `,
    resolvers: {
        Query: {
            cell: (entity, args, { models }, info) => {
                return models.Cell.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            cells: (entity, args, { models }, info) => {
                return models.Cell.findAll({
                    raw: true,
                });
            },
        },
        Cell: {
            battlefield: async (entity, args, { models }, info) => {
                return models.Battlefield.findOne({
                    include: [
                        {
                            attributes: [],
                            model: models.Cell,
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
