import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{

    constructor(private _builder : IBuilder){}

    constructHotDog(){
        this._builder.setSanduicheType(SanduicheType.HOTDOG);
        this._builder.setBread(Bread.PAOHOTDOG);
        this._builder.setProtein(Protein.XARXIXA);
        this._builder.setSalad(Salad.SEM);
        this._builder.addSauces(new Sauce("maionese"));
        this._builder.addSauces(new Sauce("ketchup"));
        this._builder.addSauces(new Sauce("mostarda"));
    }

    constructorXSalada(){
        this._builder.setSanduicheType(SanduicheType.XSALADA);
        this._builder.setBread(Bread.BRIOCHE);
        this._builder.setProtein(Protein.HAMBURGUER);
        this._builder.setSalad(Salad.ALFACE);
        this._builder.addSauces(new Sauce("maionese"));
        this._builder.addSauces(new Sauce("molho de alho"));
        this._builder.addSauces(new Sauce("cheddar"));
    }
}