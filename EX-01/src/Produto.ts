export class Produto{
    private _valor: number;
    private _codigo: number;
    private _descricao: string;

    //Setters
    public set valor(value: number) {
        this._valor = value;
    }
    public set codigo(value: number) {
        this._codigo = value;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }
    //Getters
    public get valor(): number {
        return this._valor;
    }
    public get codigo(): number {
        return this._codigo;
    }
    public get descricao(): string {
        return this._descricao;
    }
}