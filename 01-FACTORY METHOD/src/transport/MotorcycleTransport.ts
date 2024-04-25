import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class MotorcycleTransport extends Transport{
    
    //Retorna um objeto em que podem ser: Motorcycle ou Car, dependendo da classe em que foi implementado
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }
}