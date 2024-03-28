// server.ts
import express, { Request, Response } from 'express';
import { demoData } from './public/demo-data';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript Node.js Express Server!');
});

app.get('/data', (req: Request, res: Response) => {
  res.send(demoData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
