export class Endereco{
    private _rua: string;
    private _numero: number;
    private _cidade: string;
    private _estado: string;

    //Setters
    public set rua(value: string) {
        this._rua = value;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public set cidade(value: string) {
        this._cidade = value;
    }
    public set estado(value: string) {
        this._estado = value;
    }
    

    //Getters
    public get rua(): string {
        return this._rua;
    }
    public get numero(): number {
        return this._numero;
    }
    public get cidade(): string {
        return this._cidade;
    }
    public get estado(): string {
        return this._estado;
    }
}