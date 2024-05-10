import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

console.log("======================================================");

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Fazendo sanduíche...");
console.log("Tipo: " + hotdog.sanduicheType);
console.log("Proteína: " + hotdog.protein);
console.log("Pão " + hotdog.bread);
console.log("Salada: " + hotdog.salad);
console.log("Molhos: " + hotdog.sauces[0].flavor);

hotdog.sauces.forEach((sauce) =>{
    console.log(sauce.flavor);
});

console.log("======================================================");

director.constructorXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Fazendo sanduíche...");
console.log("Tipo: " + xsalada.sanduicheType);
console.log("Proteína: " + xsalada.protein);
console.log("Pão " + xsalada.bread);
console.log("Salada: " + xsalada.salad);
console.log("Molhos: " + xsalada.sauces.length);

xsalada.sauces.forEach((sauce) =>{
    console.log(sauce.flavor + ",");
});
