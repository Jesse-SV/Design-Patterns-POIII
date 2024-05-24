import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{

    constructor(console : IConsole){
        super(console)
    }

    chalenge() : void{
        console.log("Missão: Desafio");
    }
}