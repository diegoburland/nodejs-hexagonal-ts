import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class GetCarsUseCase {
    constructor(private carRepository: CarRepository) {}
  
    async execute(): Promise<Car[]> {
      return this.carRepository.getAllCars();
    }
  }