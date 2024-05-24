import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    
    constructor(){
        this.configureGame();
        console.log("Xbox: Console Configurado")
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Console Configurada.");
    }
    authToken(): void {
        console.log("Xbox: Autorizando Console");
    }

}