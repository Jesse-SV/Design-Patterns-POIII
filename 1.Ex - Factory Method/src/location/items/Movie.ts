import IItems from "./interfaces/IItems";

export default class Movie implements IItems{

    start(): void {
        this.getDescription();
        console.log("Filme retirado.");
    }
    getDescription(): void {
        console.log("Descrição do filme...")
    }
}