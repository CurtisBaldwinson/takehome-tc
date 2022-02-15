'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blocks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsToMany(models.Apps, {through: models.AppBlocks, as: 'Apps'});
        }
    }

    Blocks.init({
        title: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Blocks',
        timestamps: false
    });
    return Blocks;
};