import { Car } from "../../domain/entities/Car";
import { AppDataSource } from "../config/database";

export class CarRepository {
    private repo = AppDataSource.getRepository(Car);
  
    async createCar(car: Car): Promise<Car> {
      return this.repo.save(car);
    }
  
    async getAllCars(): Promise<Car[]> {
      return this.repo.find();
    }
  
    async getCarById(id: number): Promise<Car | null> {
      return this.repo.findOneBy({ id });
    }
  
    async updateCar(id: number, car: Partial<Car>): Promise<Car | null> {
      const existingCar = await this.repo.findOneBy({ id });
      if (existingCar) {
        const updatedCar = { ...existingCar, ...car };
        return this.repo.save(updatedCar);
      }
      return null;
    }
  
    async deleteCar(id: number): Promise<boolean> {
      const deleteResult = await this.repo.delete(id);
      return deleteResult.affected === 1;
    }
  }
  