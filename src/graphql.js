import { gql } from 'apollo-server';
import { merge } from 'lodash';

import battlefield from './graphql/battlefield';
import cell from './graphql/cell';
import game from './graphql/game';
import user from './graphql/user';

export const typeDefs = gql`
    type Query {
        version: String!
    }
    ${battlefield.typeDefs}
    ${cell.typeDefs}
    ${game.typeDefs}
    ${user.typeDefs}
`;

export const resolvers = merge(
    {
        Query: {
            version: () => `1.0`,
        }
    },
    battlefield.resolvers,
    cell.resolvers,
    game.resolvers,
    user.resolvers,
);
