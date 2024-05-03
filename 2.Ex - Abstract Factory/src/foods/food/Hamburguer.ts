import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{

    startDelivery() {
        this.getFood();
        console.log("Iniciando entrega...");
    }
    getFood() {
        console.log("Lanche: Hamburguer!");
    }
}