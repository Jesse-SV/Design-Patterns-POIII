import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    
    startDelivery() {
        this.getDrink();
        console.log("Iniciando entrega...");
    }
    getDrink() {
        console.log("Bebida: Coquinha gelada!");
    }
}