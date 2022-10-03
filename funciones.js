function probarCodigo() {

    let entrada = (prompt("Bienvenido a la trivia de Grand Theft Auto Vice City. Elija la modalida de juego. 1- Facil. 2 - Medio. 3- Dificil"));

    while (entrada !== 'ESC') {

        switch (entrada) {

            case '1': let valoruno = prompt('Como es el nombre del personaje principal. 1- Tommy Vercetty. 2- Nikola Bellic. 3- Carl Johnson');

                if (valoruno == '1') 
                {
                    alert('Su respuesta es correcta');
                }
                else 
                {
                    alert('Su respuesta es incorrecta');
                }
                entrada = (prompt("Bienvenido a la trivia de Grand Theft Auto Vice City. Elija la modalida de juego. 1- Facil. 2 - Medio. 3- Dificil"));

                break;

            case '2': let valordos = prompt('Cual es el nombre del Club nocturno que aparece en el juego. 1- Soul train. 2- Malibu Club. 3. Jet');

                if (valordos == '2') 
                {
                    alert('Su respuesta es correcta');
                }
                else 
                {
                    alert('Su respuesta es incorrecta');
                }
                entrada = (prompt("Bienvenido a la trivia de Grand Theft Auto Vice City. Elija la modalida de juego. 1- Facil. 2 - Medio. 3- Dificil"));

                break;

                break;

            case '3': let valortres = prompt('Cual es el nombre del actor que le da voz al personaje principal del juego. 1- Ray Liotta. 2- Robert de Niro. 3- Quentin Tarantino');

                if (valortres == '1') 
                {
                    alert('Su respuesta es correcta');
                }
                else 
                {
                    alert('Su respuesta es incorrecta');
                }
                entrada = (prompt("Bienvenido a la trivia de Grand Theft Auto Vice City. Elija la modalida de juego. 1- Facil. 2 - Medio. 3- Dificil"));


            default: alert('No se ha ingresado el numero solicitado, intente nuevamente');

                break;

        }

    }

}