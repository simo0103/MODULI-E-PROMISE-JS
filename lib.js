//---------------MODULI --IMPORTO LA FUNZIONE DALL'ALTRA PAGINA
const funzione = require("./main.js");

console.log(funzione.sottrazione(10,2));
console.log(funzione.variabile);



const numeri =[10,20,30,40];
const arrayFinale =numeri.map(function(x){
    return x +1;
})
console.log(arrayFinale)




//---USIAMO IL => 
const numeri =[10,20,30,40];
const arrayFinale =numeri.map(x => x +1
);
console.log(arrayFinale);

const numeri2 =[10,20,30,40];
const arrayFinale2 =numeri2.reduce( function(tot, num){
    return tot + num;
    
},0
);
console.log(arrayFinale2);


