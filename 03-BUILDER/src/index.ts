import VehicleBuilder from "./builders/interfaces/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructoSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Criando veículo...");
console.log("Tipo: " + sedan.vehicleType);
console.log("Potência: " + sedan.engine.power);
console.log("Transmissão: " + sedan.transmission);
console.log("Assentos:" + sedan.seats);
console.log("Rodas: " + sedan.wheels.length + " - Aro: " + sedan.wheels[0].rim);

console.log("=============================================");

director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("Criando veículo...");
console.log("Tipo: " + truck.vehicleType);
console.log("Potência: " + truck.engine.power);
console.log("Transmissão: " + truck.transmission);
console.log("Assentos:" + truck.seats);
console.log("Rodas: " + truck.wheels.length + " - Aro: " + truck.wheels[0].rim);

console.log("=============================================");

director.constructMotorcycle();
const motorcycle : Vehicle = builder.getVehicle();
console.log("Criando veículo...");
console.log("Tipo: " + motorcycle.vehicleType);
console.log("Potência: " + motorcycle.engine.power);
console.log("Transmissão: " + motorcycle.transmission);
console.log("Assentos:" + motorcycle.seats);
console.log("Rodas: " + motorcycle.wheels.length + " - Aro: " + motorcycle.wheels[0].rim);