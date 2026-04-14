import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main entry route
app.get('/', (req: Request, res: Response) => {
  res.json({
    company: "Elite Dreams Global Technologies",
    version: "1.0.0",
    status: "Service Operational",
    endpoints: ["/api/v1/products", "/api/v1/services", "/api/v1/auth"]
  });
});

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

// Placeholder for Product Routes
app.get('/api/v1/products', (req: Request, res: Response) => {
  // In a real app, this would fetch from Prisma
  res.json({
    message: "Product catalog list",
    data: []
  });
});

// Placeholder for Service Bookings
app.post('/api/v1/services/book', (req: Request, res: Response) => {
  const { serviceType, description, scheduledAt } = req.body;
  res.json({
    message: "Booking received",
    booking: { serviceType, description, scheduledAt, status: "PENDING" }
  });
});

app.listen(PORT, () => {
  console.log(`[Elite Dreams API]: Running on http://localhost:${PORT}`);
});
