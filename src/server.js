import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import { createBullBoard } from 'bull-board';
const { BullAdapter } = require('bull-board/bullAdapter')
import Queue from './app/lib/Queue';

const app = express();

const { router: BullUI } = createBullBoard(Queue.queues.map(queue => new BullAdapter(queue.bull)))

app.use(express.json());
app.use('/admin/queues', BullUI);

app.post('/users', UserController.store);

app.listen(3333, () => {
    console.log("Server On PORT: 3333")
});