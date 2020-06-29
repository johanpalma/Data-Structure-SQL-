import { Router } from 'express';
const router = Router();

import { createOrder, deleteOrder, getOrderById,
        getOrders, updateOrder } from '../controller/order.controller';

router.post('/create_order', createOrder);
router.get('/get_orders', getOrders);
router.get('/get_order/:id', getOrderById);
router.put('/update_order/:id', updateOrder);
router.delete('/delete_order/:id', deleteOrder);

export default router;