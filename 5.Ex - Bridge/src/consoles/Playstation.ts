import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{
    
    constructor(){
        this.configureGame();
        console.log("Playstation: Console Configurado")
    }
    configureGame(): void {
        this.authToken();
        console.log("Playstation: Configurando Jogo.");
    }
    authToken(): void {
        console.log("Playstation: Autorizando Console");
    }

}