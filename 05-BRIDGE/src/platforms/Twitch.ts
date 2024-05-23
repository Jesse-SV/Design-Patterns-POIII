import IPlataform from "./interfaces/IPlatform";

export default class Twitch implements IPlataform{

    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma Condfigurada.");
    }
    
    configureRMTP(): void {
        this.authToken()
        console.log("Twitch: Configurando Broadcasting.")
    }
    authToken(): void {
        console.log("Twitch: Autorizando a plataforma");
    }

}