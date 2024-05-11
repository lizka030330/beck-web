import express from 'express';
import bodyParser from 'body-parser';
import { USERS } from './db.js';
import { OrdersRouter } from './routers/index.js';
import { UserRouter } from './routers/user.routes.js';

const app = express();

app.use(bodyParser.json());

app.use(OrdersRouter);
app.use(UserRouter);


app.listen(8080, () => console.log('Server was started'));