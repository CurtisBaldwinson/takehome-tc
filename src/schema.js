const {gql} = require('apollo-server-express');

export default gql`
    type App {
        id: ID!
        title: String!
        user: User
        blocks: [Block]
    }
    
    type Block {
        id: ID!
        title: String!
    }
    
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        apps: [App]
    }
    
    type Mutation {
        addBlockToApp(appId: ID!, blockId: ID!): App
    }

    type Query {
        app(id: ID!): App
        blocks: [Block]
    }
`;
