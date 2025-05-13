import express from 'express';
import { handlePayment } from './connector';

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  const payment = req.body;
  const result = await handlePayment(payment);
  res.json(result);
});

app.listen(3000, () => console.log('Processor running'));
