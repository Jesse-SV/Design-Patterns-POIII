import TrackCode from "../utils/TrackCode";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{

    private trackcode : TrackCode;

    authTrackCode(): TrackCode {
        return new TrackCode();
    }
    sendCorreios(): void {
        this.trackcode = this.authTrackCode();
        console.log("Track Code: " + this.trackcode.trackcode);
        console.log("Enviando encomenda via Correios.");
    }
    receiveCorreios(): void {
        console.log("Recebendo encomenda via Correios.");
    }

}