var a = 6;
var b = 15;
if (a === 6){           //Ambos são comparadores, quando se tem 3 iguais ele compara o tipo também
    let a = 5;          //este mantém o resultado interno ao bloco
    var b = 7;          //Esse declara o valor para a função saindo do bloco
    console.log(a);         
    console.log(b);     
}
console.log(a);
console.log(b); 