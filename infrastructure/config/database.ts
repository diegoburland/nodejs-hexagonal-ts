import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Car } from '../../domain/entities/Car';


export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite', // Specify the path to your SQLite database file
    entities: [Car],
    synchronize: true, // Automatically create or update the database schema
    logging: false,
  });


export const connectDatabase = async (): Promise<void> => {
    await AppDataSource.initialize()
        .then(() => {
        console.log('Database connection established');
        })
        .catch((error) => {
        console.error('Error connecting to the database:', error);
        });
    };
