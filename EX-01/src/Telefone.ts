export class Telefone{
    private _ddd: string;
    private _numero: number;
    private _tipo: string;

    //Setters
    public set ddd(value: string) {
        this._ddd = value;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public set tipo(value: string) {
        this._tipo = value;
    }
    //Getters
    public get ddd(): string {
        return this._ddd;
    }
    public get numero(): number {
        return this._numero;
    }
    public get tipo(): string {
        return this._tipo;
    }

}