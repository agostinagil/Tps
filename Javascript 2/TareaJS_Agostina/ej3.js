// Obtener los números impares del 1 al 50
function lista(){
    let impar = [];
    
    for (let i=1; i <=50; i++){
         if ( i % 2 == 1  ) {
            impar.push(i)
            document.write(`${i} - `)
        }
    } 
}