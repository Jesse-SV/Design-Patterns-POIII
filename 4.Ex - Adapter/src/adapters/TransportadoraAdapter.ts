import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import TrackCode from "../utils/TrackCode";

export default class TransportadoraAdapter implements ICorreios{

    constructor(private transportadora : Transportadora){}

    authTrackCode(): TrackCode {
        return new TrackCode;
    }
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }

}