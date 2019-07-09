export default {
    typeDefs: `
        extend type Query {
            battlefield(id: ID!): Game
            battlefields: [Game]
        }

        type Battlefield {
            id: ID!
            owner: [User]!
            cells: [Cell]!
        }
    `,
    resolvers: {
        Query: {
            battlefield: (entity, args, { models }, info) => ({}),
            battlefields: (entity, args, { models }, info) => ({}),
        },
        Battlefield: {
            owner: (entity, args, { models }, info) => ({}),
            cells: (entity, args, { models }, info) => ({}),
        }
    },
}
