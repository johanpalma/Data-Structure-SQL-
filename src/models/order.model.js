import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Carrier from './carrier.model';

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    provider: {
        type: Sequelize.TEXT
    },
    address: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.TEXT
    },
    description_order: {
        type: Sequelize.TEXT
    },
    quantity: {
        type: Sequelize.NUMBER
    },
    unit_price: {
        type: Sequelize.NUMBER
    }, // product price excluding tax
    total_price: {
        type: Sequelize.NUMBER
    }, //price with tax
    delivery_date: {
        type: Sequelize.DATE
    },
    carrier_id: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

export default Order;