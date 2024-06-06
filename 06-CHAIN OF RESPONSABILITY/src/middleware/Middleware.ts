export default abstract class Middleware{
    public next : Middleware = null;

    //Marca qual é o próximo, como um ponteiro formando a "corrente"
    public linkWith(next : Middleware) : Middleware{
        this.next = next;
        return next;
    }

    public abstract check(email : string, password : string) : boolean;

    //Verificar se cheguei no fim da "corrente"
    protected checkNext(email : string, password : string) : boolean{
        if((this.next === null) || (this.next === undefined)){
            return true;
        }
        return this.next.check(email,password);
    }
}