import { Router } from 'express';
const router = Router();

import { createShipment, deleteShipment, getShipmentById,
        getShipments, updateShipment } from '../controller/shipment.controller';


router.post('/create_shipment', createShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipment/:id', getShipmentById);
router.put('/update_shipment/:id', updateShipment);
router.delete('/delete_shipment/:id', deleteShipment)

export default router;