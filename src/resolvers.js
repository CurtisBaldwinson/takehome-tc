import db from '../models';

const resolvers = {
    Mutation: {
        async addBlockToApp(parent, {appId, blockId}) {
            db.AppBlocks.create({
                appId,
                blockId
            });
            return db.Apps.findByPk(appId, {
                include: [{
                    model: db.Blocks,
                    as: 'blocks'
                }]
            });
        }
    },
    Query: {
        app: (parent, {id}) => db.Apps.findByPk(id, {
            include: [{
                model: db.Blocks,
                as: 'blocks'
            }]
        }),
        blocks: () => db.Blocks.findAll()
    },
    App: {
        async user(app) {
            return db.Users.findByPk(app.userId);
        }
    },
    User: {
        async apps(user) {
            return user.getApps();
        }
    }
}

export default resolvers;