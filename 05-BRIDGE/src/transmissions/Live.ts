import IPlataform from "../platforms/interfaces/IPlatform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission{

    constructor(private platform : IPlataform){}

    broadcasting(): void {
        console.log("Iniciando a Transmissão.");
    }
    result(): void {
        console.log("********* NO AR ********");
    }

}