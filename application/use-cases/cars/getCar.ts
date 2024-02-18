import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class GetCarUseCase {
    constructor(private carRepository: CarRepository) {}
  
    async execute(id: number): Promise<Car | null> {
      return this.carRepository.getCarById(id);
    }
  }