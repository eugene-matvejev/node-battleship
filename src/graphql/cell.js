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
            cell: (entity, args, { orm }, info) => {
                return orm.Cell.findOne({
                    where: {
                        id: args.id,
                    },
                    raw: true,
                });
            },
            cells: (entity, args, { orm }, info) => {
                return orm.Cell.findAll({
                    raw: true,
                });
            },
        },
        Cell: {
            battlefield: async (entity, args, { orm }, info) => {
                return orm.Battlefield.findOne({
                    include: [
                        {
                            attributes: [],
                            model: orm.Cell,
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
