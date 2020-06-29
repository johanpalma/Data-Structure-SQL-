import { Router } from 'express';
const router = Router();

import { createCarrier, deleteCarrier, getCarrierById,
        getCarriers, updateCarrier } from '../controller/carrier.controller';

router.post('/create_carrier', createCarrier);
router.get('/get_carriers', getCarriers);
router.get('/get_carrier/:id', getCarrierById);
router.put('/update_carrier/:id', updateCarrier);
router.delete('/delete_carrier/:id', deleteCarrier);

export default router;