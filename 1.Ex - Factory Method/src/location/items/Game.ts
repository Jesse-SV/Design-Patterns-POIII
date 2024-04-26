import IItems from "./interfaces/IItems";

export default class Game implements IItems{

    start(): void {
        this.getDescription();
        console.log("Jogo retirado.");
    }
    getDescription(): void {
        console.log("Descrição do Jogo...");
    }
}