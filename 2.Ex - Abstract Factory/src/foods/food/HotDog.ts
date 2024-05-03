import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{

    startDelivery() {
        this.getFood();
        console.log("Iniciando entrega...");
    }
    getFood() {
        console.log("Lanche: Cachorro Quente!");
    }
}