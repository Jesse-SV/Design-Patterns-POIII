import Token from "../utils/Token";
import IPayPalPayment from "./interfaces/IPayPalPayment";


export default class PayPal implements IPayPalPayment{
    // _variavel é para quando eu tenho um atributo de uma classe que exige encapsulamento
    // token é variável da classe Token e não da PayPal
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        // .token é o método da classe Token (getToken)
        console.log("TOKEN" + this.token.token);
        console.log("Enviando Pagamento Via PayPal.");
    }
    paypalReceive(): void {
        console.log("Recebendo Pagamento Via PayPal.");
    }

}