import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando entrega...");
    }
    getCargo(): void {
        console.log("Drone: Emcomenda retirada!");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 25km, sudeste!");
    }
}