import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BikeTransport extends Transport{
    
    //Retorna um objeto em que podem ser: Motorcycle ou Car, dependendo da classe em que foi implementado
    protected createTransport(): IVehicle {
        return new Bike();
    }
}