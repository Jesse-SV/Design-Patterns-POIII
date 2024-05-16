import Token from "../utils/Token";
import IPayoneer from "./interfaces/IPayoneer";

export default class Payoneer implements IPayoneer{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        // .token é o método da classe Token (getToken)
        console.log("TOKEN" + this.token.token);
        console.log("Enviando Pagamento Via Payoneer.");
    }
    receivePayment(): void {
        console.log("Recebendo Pagamento Via Payoneer.");
    }

}