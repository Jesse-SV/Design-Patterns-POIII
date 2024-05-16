import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{

    constructor(private payoneer : Payoneer){}

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.receivePayment();
    }

}