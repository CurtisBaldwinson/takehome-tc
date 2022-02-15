import express from 'express';

// Get Apollo Server
import server from './src/server';

const app = express();
server.applyMiddleware({app});

try {
    (async () => {
        app.listen(8080, () => {
            console.log(`🚀 Server running on http://localhost:8080/graphql`);
        });
    })();
} catch (error) {
    console.error(error);
}
