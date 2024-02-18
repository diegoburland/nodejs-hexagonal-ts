import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class UpdateCarUseCase {
    constructor(private carRepository: CarRepository) {}
  
    async execute(id: number, carData: Partial<Car>): Promise<Car | null> {
      return this.carRepository.updateCar(id, carData);
    }
  }