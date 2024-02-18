import { Car } from "../../../domain/entities/Car";
import { CarRepository } from "../../../infrastructure/repositories/carRepository";
import { CreateCarUseCase } from "../../use-cases/cars/createCar";
import { DeleteCarUseCase } from "../../use-cases/cars/deleteCar";
import { GetCarUseCase } from "../../use-cases/cars/getCar";
import { GetCarsUseCase } from "../../use-cases/cars/getCars";
import { UpdateCarUseCase } from "../../use-cases/cars/updateCar";


export class CarService {
  private createCarUseCase: CreateCarUseCase;
  private deleteCarUseCase: DeleteCarUseCase;
  private getCarUseCase: GetCarUseCase;
  private getCarsUseCase: GetCarsUseCase;
  private updateCarUseCase: UpdateCarUseCase;

  constructor(private carRepository: CarRepository) {
    this.createCarUseCase = new CreateCarUseCase(carRepository);
    this.deleteCarUseCase = new DeleteCarUseCase(carRepository);
    this.getCarUseCase = new GetCarUseCase(carRepository);
    this.getCarsUseCase = new GetCarsUseCase(carRepository);
    this.updateCarUseCase = new UpdateCarUseCase(carRepository);
  }

  async createCar(carData: Car): Promise<Car> {
    return this.createCarUseCase.execute(carData);
  }

  async deleteCar(id: number): Promise<boolean> {
    return this.deleteCarUseCase.execute(id);
  }

  async getCarById(id: number): Promise<Car | null> {
    return this.getCarUseCase.execute(id);
  }

  async getAllCars(): Promise<Car[]> {
    return this.getCarsUseCase.execute();
  }

  async updateCar(id: number, carData: Partial<Car>): Promise<Car | null> {
    return this.updateCarUseCase.execute(id, carData);
  }
}
