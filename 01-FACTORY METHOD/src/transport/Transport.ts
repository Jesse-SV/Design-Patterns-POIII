import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport{
    startTransport() : void{
        //Vehicle genérico
        //NAO ESQUECE O PARENTESES PELO AMOR DE DEUS
        const vehicle = this.createTransport();
        vehicle.startRoute();
    };
    protected abstract createTransport() : IVehicle;
}