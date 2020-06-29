import Shipment from '../models/shipment.model';

export async function createShipment(req, res) {
        const data = req.body;
        try {
            let newShipment = await Shipment.create(data, {
                fields: [
                    'origin_country', 'origin_state', 'origin_city', 'destination_country',
                    'destination_state', 'destination_city', 'pickup_date', 'delivery_date', 
                    'status', 'carrier_rate', 'carrier_id'
                ]
            });
            if (newShipment) {
                res.json({
                    message: 'Shipment created successfully',
                    data: newShipment
                });
            }
            
        } catch (error) {
            res.status(500).json({
                message: 'Error data no save'
            })
        }
}

export async function getShipments(req, res) {
    try {
        let shipments = await Shipment.findAll();
        return res.json({
            message: 'get shipments successfully',
            data: shipments
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getShipmentById(req, res) {
    const { id } = req.params;
    try {
        let shipment = await Shipment.findOne({
            where: {
                id
            }
        });
        return res.json({
            message: 'get shipment successfully',
            data: shipment
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteShipment(req, res) {
    const { id } = req.params;
    try {
        let deleteRowsCount = await Shipment.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'delete shipment successfully',
            count: deleteRowsCount
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function updateShipment(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;

    try {
        let shipments = await Shipment.findAll({
            fields: [
                'origin_country', 'origin_state', 'origin_city', 'destination_country',
                'destination_state', 'destination_city', 'pickup_date', 'delivery_date', 
                'status', 'carrier_rate', 'carrier_id'
            ],
            where: {
                id
            }
        });
        if (shipments.length > 0) {
            shipments.forEach( async shipment => {
                await shipment.update( dataUpdate );
            });
        }
        res.json({
            message: 'Shipment update successfully',
            data: shipments
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}