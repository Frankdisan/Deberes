
function calculo () {
    var lados = []
    for (var i=0; i<3; i++) {
    lados.push(prompt('Lado ' + (i+1)))
    }
    
    if (lados[0] == lados[1] && lados [0] == lados [2]) {
        alert ("El triángulo es equilátero y su área es de " + ((lados[0]*lados[0]* Math.sqrt(3))/4))

    } else if (lados[0] != lados[1] && lados [1] != lados [2] && lados[0] != lados [2]) {   
        let s = ((lados[0] - (-lados[1]) - (-lados[2]))/2)
        alert ("El triángulo es escaleno y su área es de " + Math.sqrt(s * (s- lados[0]) * (s - lados[1]) * (s - lados[2])))

    } else if (lados[0] == lados[1] && lados[1] != lados [2] || lados[0] == lados[2] && lados[2] != lados [1] || lados[1] == lados[2] && lados[2] != lados [0]) {
        if (lados[0] == lados[1]) {
            alert ("El triángulo es isosceles y su área es de " + (lados[2] * (Math.sqrt ((lados[0]*lados[0]) - ((lados[2]*lados[2])/4 ))))/2)
        } else if (lados[0] == lados[2]) {
            alert ("El triángulo es isosceles y su área es de " + (lados[1] * (Math.sqrt ((lados[0]*lados[0]) - ((lados[1]*lados[1])/4 ))))/2)
        } else if (lados[1] == lados[2]) {
            alert ("El triángulo es isosceles y su área es de " + (lados[0] * (Math.sqrt ((lados[1]*lados[1]) - ((lados[0]*lados[0])/4 ))))/2)
            }
    }
    calculo ();
}

calculo();

// Cuatro cosas que quiero corregir: Si el triángulo no existe, que el programa lo indique,
// poder parar el loop del prompt al presionar cancelar. 
// Poder sumar los elementos del array (en el triángulo escaleno), utilizando el signo +, y no el de menos. Me pasaba que si los lados eran 3, 4 y 5 , la "suma" daba 345
// Y poder redondear los valores.
