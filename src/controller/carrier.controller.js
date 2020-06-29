import Carrier from '../models/carrier.model';

export async function createCarrier(req, res) {
        const data = req.body;
        try {
            let newCarrier = await Carrier.create(data, {
                fields: [
                    'name', 'scac', 'mc', 'dot','fein'
                ]
            });
            if (newCarrier) {
                res.json({
                    message: 'Carrier created successfully',
                    data: newCarrier
                });
            }
            
        } catch (error) {
            res.status(500).json({
                message: 'Error data no save'
            })
        }
}

export async function getCarriers(req, res) {
    try {
        let carriers = await Carrier.findAll();
        return res.json({
            message: 'get carriers successfully',
            data: carriers
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getCarrierById(req, res) {
    const { id } = req.params;
    try {
        let carrier = await Carrier.findOne({
            where: {
                id
            }
        });
        return res.json({
            message: 'get carrier successfully',
            data: carrier
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteCarrier(req, res) {
    const { id } = req.params;
    try {
        let deleteRowsCount = await Carrier.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'delete carrier successfully',
            count: deleteRowsCount
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function updateCarrier(req, res) {
    const { id } = req.params;
    const dataUpdate = req.body;

    try {
        let carriers = await Carrier.findAll({
            fields: [
                'name', 'scac', 'mc', 'dot','fein'
            ],
            where: {
                id
            }
        });
        if (carriers.length > 0) {
            carriers.forEach( async carrier => {
                await carrier.update( dataUpdate );
            });
        }
        res.json({
            message: 'Carrier update successfully',
            data: carriers
        });
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Something goes wrong',
            data: {}
        });
    }
}