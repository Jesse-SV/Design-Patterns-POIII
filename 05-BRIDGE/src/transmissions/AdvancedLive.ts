import IPlataform from "../platforms/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{

    constructor(platform : IPlataform){
        super(platform);
    }

    subtitles() : void{
        console.log("Legendas ativadas na transmissão");
    }   

    coments() : void{
        console.log("Comentários liberados na transmissão");
    }
}