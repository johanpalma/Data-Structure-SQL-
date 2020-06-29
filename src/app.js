import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

// Imports Routes
import shipmentRoutes from './routes/shipment.route';
import carrierRoutes from './routes/carrier.router';
import orderRoutes from './routes/order.route';

//middleware
app.use(json());
app.use(morgan('dev'));

// Use routes
app.use('/api', shipmentRoutes);
app.use('/api', carrierRoutes);
app.use('/api', orderRoutes);

export default app;