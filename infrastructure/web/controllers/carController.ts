import { Request, Response } from "express";
import { Car } from "../../../domain/entities/Car";
import { CarService } from "../../../application/services/cars/carService";

export class CarController {
    constructor(private carService: CarService) {}

    async createCar(req: Request, res: Response): Promise<void> {
        try {
          const carData: Car = req.body;
          const newCar = await this.carService.createCar(carData);
          res.status(201).json(newCar);
        } catch (error) {
          res.status(500).json({ message: 'Error creating car', error });
        }
      }
    
      async getAllCars(req: Request, res: Response): Promise<void> {
        try {
          const cars = await this.carService.getAllCars();
          res.status(200).json(cars);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving cars', error });
        }
      }
    
      async getCarById(req: Request, res: Response): Promise<void> {
        try {
          const carId = parseInt(req.params.id);
          const car = await this.carService.getCarById(carId);
          if (car) {
            res.status(200).json(car);
          } else {
            res.status(404).json({ message: 'Car not found' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving car', error });
        }
      }
    
      async updateCar(req: Request, res: Response): Promise<void> {
        try {
          const carId = parseInt(req.params.id);
          const carData: Partial<Car> = req.body;
          const updatedCar = await this.carService.updateCar(carId, carData);
          if (updatedCar) {
            res.status(200).json(updatedCar);
          } else {
            res.status(404).json({ message: 'Car not found' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Error updating car', error });
        }
      }
    
      async deleteCar(req: Request, res: Response): Promise<void> {
        try {
          const carId = parseInt(req.params.id);
          const success = await this.carService.deleteCar(carId);
          if (success) {
            res.status(200).json({ message: 'Car deleted successfully' });
          } else {
            res.status(404).json({ message: 'Car not found' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Error deleting car', error });
        }
      }
}