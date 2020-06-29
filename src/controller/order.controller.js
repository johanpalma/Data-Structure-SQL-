import Order from '../models/order.model';

export async function createOrder(req, res) {
        const data = req.body;
        try {
            let newOrder = await Order.create(data, {
                fields: [
                    'provider', 'address', 'phone', 'description_order', 'quantity',
                    'unit_price', 'total_price', 'delivery_date', 'carrier_id'
                ]
            });
            if (newOrder) {
                res.json({
                    message: 'Order created successfully',
                    data: newOrder
                });
            }
            
        } catch (error) {
            res.status(500).json({
                message: 'Error data no save'
            })
        }
}

export async function getOrders(req, res) {
    try {
        let orders = await Order.findAll();
        return res.json({
            message: 'get order successfully',
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOrderById(req, res) {
    const { id } = req.params;
    try {
        let order = await Order.findOne({
            where: {
                id
            }
        });
        return res.json({
            message: 'get order successfully',
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteOrder(req, res) {
    const { id } = req.params;
    try {
        let deleteRowsCount = await Order.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'delete order successfully',
            count: deleteRowsCount
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function updateOrder(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;

    try {
        let orders = await Order.findAll({
            fields: [
                'provider', 'address', 'phone', 'description_order', 'quantity',
                'unit_price', 'total_price', 'delivery_date', 'carrier_id'
            ],
            where: {
                id
            }
        });
        if (orders.length > 0) {
            orders.forEach( async order => {
                await order.update( dataUpdate );
            });
        }
        res.json({
            message: 'Order update successfully',
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}