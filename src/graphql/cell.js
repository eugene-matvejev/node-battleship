export default {
    typeDefs: `
        extend type Query {
            cell(id: ID!): Cell
            cells: [Cell]
        }

        type Cell {
            id: ID!
            seq: Int!
            battlefield: Battlefield!
        }
    `,
    resolvers: {
        Query: {
            cell: (entity, args, { models }, info) => ({ }),
            cells: (entity, args, { models }, info) => ({ }),
        },
        Cell: {
            battlefield: (entity, args, { models }, info) => ({ }),
        }
    },
}
