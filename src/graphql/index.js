import { gql } from 'apollo-server';
import { merge } from 'lodash';

import battlefield from './battlefield';
import cell from './cell';
import game from './game';
import user from './user';

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
