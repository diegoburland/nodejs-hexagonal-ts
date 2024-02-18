
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class DeleteCarUseCase {
    constructor(private carRepository: CarRepository) {}
  
    async execute(id: number): Promise<boolean> {
      return this.carRepository.deleteCar(id);
    }
  }