import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Carrier from './carrier.model';

const Shipment = sequelize.define('shipment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    origin_country: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    origin_state: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    origin_city: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    destination_country: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    destination_state: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    destination_city: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pickup_date: {
        type: Sequelize.DATE
    },
    delivery_date: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    carrier_rate: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    carrier_id: {
        type: Sequelize.INTEGER
    }
},{
 timestamps: false 
});

export default Shipment;