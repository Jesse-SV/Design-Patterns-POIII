import Middleware from "./Middleware";
import Database from "../server/Database"

export default class CheckUserMiddleware extends Middleware{

    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1){
            console.log("Email inválido!");
            return false;
        }

        if(!Database.filter(item => item.email === email && item.password === password).length){
            console.log("Usuário Não Encontrado!");
            return false;
        }
        return this.checkNext(email, password);
    }

}