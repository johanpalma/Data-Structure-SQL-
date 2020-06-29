import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Carrier = sequelize.define('carrier', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    scac: {
        type: Sequelize.TEXT
    },
    mc: {
        type: Sequelize.NUMBER
    },
    dot: {
        type: Sequelize.NUMBER
    },
    fein: {
        type: Sequelize.TEXT
    },
},{
    timestamps: false
})

export default Carrier;