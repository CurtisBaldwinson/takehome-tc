import {ApolloServer} from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';

const models = require('../models');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: models,
    playground: {
        settings: {
            'schema.polling.enable': false
        }
    }
});

export default server;
