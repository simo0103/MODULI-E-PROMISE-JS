// promise 
let voto = parseInt(((Math.random() *30) +1),10) ;

let superero_esame = new Promise
(
    (resolve, reject) =>
    {
        if (voto > 18)
        {
        const promosso = 
            {
                msg : "Bravo!"
            };
            resolve (promosso);
        } else
         
        {
            const bocciato = 
            {
                msg : "Asino"
            }
            reject (bocciato);
        }

    }
);

//console.log(voto);

let esito_esame = () =>
    superero_esame
    .then((esito_se_promosso) =>
        console.log('Esito: '+ esito_se_promosso.msg + voto)
    )

    .catch((esito_se_bocciato)=>
        console.log('Esito: '+ esito_se_bocciato.msg + voto)
    );


esito_esame();