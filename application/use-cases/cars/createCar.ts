import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";

export class CreateCarUseCase {
    constructor(private carRepository: CarRepository) {}
  
    async execute(carData: Car): Promise<Car> {
      const newCar = await this.carRepository.createCar(carData);
      return newCar;
    }
}