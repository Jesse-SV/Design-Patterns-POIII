import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bike iniciando entrega...");
    }
    getCargo(): void {
        console.log("Bike: Encomenda Retirada!");
    }
}