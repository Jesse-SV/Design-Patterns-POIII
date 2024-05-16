import IPayoneer from "../payoneer/interfaces/IPayoneer";
import PayPal from "../paypal/PayPal";
import Token from "../utils/Token";

export default class PayPalAdapter implements IPayoneer{

    constructor(private paypal : PayPal){}

    authToken(): Token {
        throw new Error("Method not implemented.");
    }
    sendPayment(): void {
        throw new Error("Method not implemented.");
    }
    receivePayment(): void {
        throw new Error("Method not implemented.");
    }

}
