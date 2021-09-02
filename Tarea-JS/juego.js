    let dinero = 50;
    while (dinero !=0 || dinero !=200) {
    let numeroAleatorio = Math.round(Math.random()* (6-1) + 1);
    let numeroElegido = prompt ("Elija un número del 1 al 6, su dinero actual es de "+ dinero + " Euros, la apuesta mínima es de 50 Euros");
    if (numeroElegido == numeroAleatorio) {
        dinero = dinero * 2
        alert ("Felicidades, ha ganado, su saldo actual es de " + dinero + " Euros" )
        if (dinero == 200) {
            alert ("¡Felicidades! Usted ha alcanzado el mayor premio")
            break;
        }
    } else { 
        dinero = dinero - 50;
        alert ("Lo lamento, ha perdido, el numero correcto era: "+ numeroAleatorio + ". Su saldo actual es de " + dinero + " Euros")
        if (dinero == 0) {
            alert ("Juego terminado")
            break;
        }
    }
  }

