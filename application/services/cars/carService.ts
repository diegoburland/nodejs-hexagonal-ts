import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class CarService {
    constructor(private carRepository: CarRepository) {}
  
    async createCar(car: Car): Promise<Car> {
      return this.carRepository.createCar(car);
    }
  
    async getAllCars(): Promise<Car[]> {
      return this.carRepository.getAllCars();
    }
  
    async getCarById(id: number): Promise<Car | null> {
      return this.carRepository.getCarById(id);
    }
  
    async updateCar(id: number, car: Partial<Car>): Promise<Car | null> {
      return this.carRepository.updateCar(id, car);
    }
  
    async deleteCar(id: number): Promise<boolean> {
      return this.carRepository.deleteCar(id);
    }
  }