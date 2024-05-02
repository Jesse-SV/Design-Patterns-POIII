import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Avião: Passageiros Embarcados!");
    }
    checkWind(): void {
        console.log("Avião: Ventos a 25km, sudeste!");
    }
}