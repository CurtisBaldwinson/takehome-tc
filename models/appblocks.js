'use strict';
const {
    Model
} = require('sequelize');

import Apps from './apps';
import Blocks from './blocks';

module.exports = (sequelize, DataTypes) => {
    class AppBlocks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    AppBlocks.init({
        appId: {
            type: DataTypes.INTEGER,
            references: {
                model: Apps,
                key: 'id'
            }
        },
        blockId: {
            type: DataTypes.INTEGER,
            references: {
                model: Blocks,
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'AppBlocks',
        timestamps: false
    });
    return AppBlocks;
};