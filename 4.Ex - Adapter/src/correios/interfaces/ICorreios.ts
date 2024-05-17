import TrackCode from "../../utils/TrackCode";

export default interface ICorreios{

    authTrackCode() : TrackCode;
    sendCorreios() : void;
    receiveCorreios() : void;
}