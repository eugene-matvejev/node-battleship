import { gql } from 'apollo-server';
import { merge } from 'lodash';

import battlefield from './graphql/battlefield';
import cell from './graphql/cell';
import game from './graphql/game';
import user from './graphql/user';

export const typeDefs = gql`
    type Query
    ${battlefield.typeDefs}
    ${cell.typeDefs}
    ${game.typeDefs}
    ${user.typeDefs}
`;

export const resolvers = merge(
    battlefield.resolvers,
    cell.resolvers,
    game.resolvers,
    user.resolvers,
);
