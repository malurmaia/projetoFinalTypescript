import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../src/db";
import moment from "moment";

const Game = sequelize.define("game", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date: {
        type: DataTypes.NOW,
        allowNull: false,
        defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss')
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
        references: {
            model: 'user',
            key: 'id'
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

})

export default Game;