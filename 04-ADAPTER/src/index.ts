import PayoneerAdapter from "./adapters/PayoneerAdapter";
import Payoneer from "./payoneer/Payoneer";
import IPayoneer from "./payoneer/interfaces/IPayoneer";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interfaces/IPayPalPayment";

const payment : IPayPalPayment = new PayoneerAdapter(new Payoneer);
payment.paypalPayment();
payment.paypalReceive();

console.log();

const payment2 : IPayoneer = new Payoneer();
payment2.sendPayment();
payment2.receivePayment();

