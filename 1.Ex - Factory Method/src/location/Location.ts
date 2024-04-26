import IItems from "./items/interfaces/IItems";

export default abstract class Location{
    startItem() : void{
        //Por que é const?
        //Para o produto nao ser alterado dentro do processo
        const item = this.createItem();
        item.start();
    };
    //Oque é protected abstract?
    //E possivel acessar ele apenas dentro das subclasses
    protected abstract createItem() : IItems;
}