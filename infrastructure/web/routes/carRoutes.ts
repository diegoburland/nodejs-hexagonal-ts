import { Request, Response, Router } from "express";
import { CarRepository } from "../../repositories/carRepository";
import { CarService } from "../../../application/services/cars/carService";
import { CarController } from "../controllers/carController";

const carRepository = new CarRepository();
const carService = new CarService(carRepository);
const carController = new CarController(carService);

const router = Router();

router.post('/cars', (req: Request, res: Response) => carController.createCar(req, res));
router.get('/cars', (req: Request, res: Response) => carController.getAllCars(req, res));
router.get('/cars/:id', (req: Request, res: Response) => carController.getCarById(req, res));
router.put('/cars/:id', (req: Request, res: Response) => carController.updateCar(req, res));
router.delete('/cars/:id', (req: Request, res: Response) => carController.deleteCar(req, res));

export default router;