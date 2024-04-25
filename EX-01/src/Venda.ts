import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda{
    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produtos : Produto[];
    
    //Setters
    public set codigo(value: number) {
        this._codigo = value;
    }
    public set data(value: number) {
        this._data = value;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }
    public set produtos(value: Produto[]) {
        this._produtos = value;
    }
    //Getters
    public get codigo() {
        return this._codigo;
    }
    public get data() {
        return this._data;
    }
    public get cliente() {
        return this._cliente;
    }
    public set produtos() {
        return this._produtos;
    }

    public calcularTotal(): number{
        let i: number;
        let soma: number;

        for(i=0; i<this.produtos.length;i++){
            soma += this.produtos[i].valor;
        }
        return soma;
    }
}
