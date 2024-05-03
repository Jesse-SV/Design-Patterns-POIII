import Client from "./clients/Client";
import AiqFomeDelivery from "./delivery/AiqFomeDelivery";
import Delivery from "./delivery/Delivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentDelivery = Delivery.IFOOD;
let factory : IDeliveryFactory;

switch(currentDelivery){
    case Delivery.AIQFOME:
        factory = new AiqFomeDelivery();
        break;
    case Delivery.IFOOD:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Delivery não definido");

}

const client = new Client(factory);
client.startDelivery();