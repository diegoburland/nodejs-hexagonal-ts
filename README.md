# Car Sales API

This is a simple REST API for managing car sales, built with Express, TypeScript, and SQLite using hexagonal architecture principles.

## Features

- Create, read, update, and delete (CRUD) operations for cars.
- SQLite database with TypeORM for data persistence.
- Implementation of hexagonal architecture for separation of concerns.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/car-sales-api.git

2. Navigate to the project directory:
    
    ```bash
    cd car-sales-api

3. Install the dependencies:
    ```bash
    npm install

### Running the Application

1. Start the server:
    ```bash
    npm start

2. The API will be available at http://localhost:3000.

### API Endpoints

    - POST /cars: Create a new car.
    - GET /cars: Retrieve all cars.
    - GET /cars/:id: Retrieve a car by its ID.
    - PUT /cars/:id: Update a car by its ID.
    - DELETE /cars/:id: Delete a car by its ID.

