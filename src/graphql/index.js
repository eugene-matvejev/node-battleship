import { gql } from 'apollo-server';
import { merge } from 'lodash';

import alliance from './alliance';
import game from './game';
import guild from './guild';
import user from './user';

export const typeDefs = gql`
    type Query {
        version: String!
    }
    ${alliance.typeDefs}
    ${game.typeDefs}
    ${guild.typeDefs}
    ${user.typeDefs}
`

export const resolvers = merge(
    {
        Query: {
            version: () => `1.0`,
        }
    },
    alliance.resolvers,
    game.resolvers,
    guild.resolvers,
    user.resolvers,
);
