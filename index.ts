import bodyParser from 'body-parser';
import express, { Request, Response} from 'express';
import carRoutes from './infrastructure/web/routes/carRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(carRoutes);

app.listen(port, () => {
    console.log('Server running on port', port)
})