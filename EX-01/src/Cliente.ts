import { Telefone } from "./Telefone";
import { Endereco } from "./Endereco";

export class Cliente{
    private _nome: string;
    private _cpf :number;
    private _data_nascimento: number;
    private _sexo : string;
    endereco : Endereco;
    telefones : Telefone[];

    //Setters
    public set nome(value: string) {
        this._nome = value;
    }
    public set cpf(value: number) {
        this._cpf = value;
    }
    public set data_nascimento(value: number) {
        this._data_nascimento = value;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    //Getters
    public get nome(): string {
        return this._nome;
    }
    public get cpf(): number {
        return this._cpf;
    }
    public get data_nascimento(): number {
        return this._data_nascimento;
    }
    public get sexo(): string {
        return this._sexo;
    }
    e



}