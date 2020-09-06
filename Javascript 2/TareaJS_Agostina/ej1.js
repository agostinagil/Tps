var btn = document.getElementById(`btn`)
//var resultado = document.getElementById(`resultado`).innerHTML
// como hacer para que el resultado esté dentro del div y no en otro lado
var dados = []
var contador = 0
function azar(){
    if (contador==0){
        for(let i=0; i<5; i++){
            let num = Math.round(Math.random()*6);
            contador= contador + num
            dados.push(num)
            //resultado = document.write(`El resultado del dado ${i + 1} es: ${num} <br>`)  
            
        } if ((contador + dados.length-1) > 20 ){
            document.write(`Buen tiro! <br>`);
        } else if ((contador + dados.length-1) < 10){
            document.write(`Seguí participando <br>`);
        } else if ((contador + dados.length-1) == 30) {
            document.write(`Hoy es tu día de suerte`)
        }else{
            document.write(`Podrías mejorar <br>`)
        }
    }  var resultado = document.write(`El resultado de los dados es: ${contador + dados.length-1}<br>`)

}
btn.addEventListener(`click`, azar, true)




