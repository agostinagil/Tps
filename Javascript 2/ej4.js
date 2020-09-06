var resu =document.getElementById(`resu`);
function multiplicar (n1){
    for (let i=1; i<=20; i++ ){
        //resultado= num * num
        //let tabla = Math.round(Math.imul(num, num));
        let tabla = n1 * i
        //document.write(`${n1} * ${i} = ${tabla}`)
        document.write(` ${n1} * ${i} = ${tabla} <br> `)
    } 
}

