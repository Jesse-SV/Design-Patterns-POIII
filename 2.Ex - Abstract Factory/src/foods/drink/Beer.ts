import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    
    startDelivery() {
        this.getDrink();
        console.log("Iniciando entrega...");
    }
    getDrink() {
        console.log("Bebida: Cerveja!");
    }
}