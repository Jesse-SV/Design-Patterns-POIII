import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Venda{
    codigo : number;
    data : number;
    cliente : Cliente;
    produtos : Produto[];

    public calcularTotal(): number{
        let i: number;
        let soma: number;

        for(i=0; i<this.produtos.length;i++){
            soma += this.produtos[i].valor;
        }
        return soma;
    }
}