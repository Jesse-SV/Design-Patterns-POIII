import TrackCode from "../utils/TrackCode";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{

    private trackcode : TrackCode;

    authTrackCode(): TrackCode {
        return new TrackCode();
    }
    send(): void {
        this.trackcode = this.authTrackCode();
        console.log("Track Code: " + this.trackcode.trackcode);
        console.log("Enviando encomenda via Transportadora.");
    }
    receive(): void {
        console.log("Recebendo encomenda via Transportadora.");
    }

}