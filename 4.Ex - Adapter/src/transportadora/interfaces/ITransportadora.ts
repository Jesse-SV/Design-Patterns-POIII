import TrackCode from "../../utils/TrackCode";

export default interface ITransportadora{

    authTrackCode() : TrackCode;
    send() : void;
    receive() : void;
}