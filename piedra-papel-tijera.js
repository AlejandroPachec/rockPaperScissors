'use strict';

function generarNumeroAleatorio (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function jugar () {
  let contadorUsuario = 0;
  let contadorMaquina = 0;
  do {
    const opcionMaquina = generarNumeroAleatorio(1, 3);

    const opcionUsuario = prompt('¿Piedra, papel o tijera?').toLowerCase();


    if (opcionMaquina === 1 && opcionUsuario === 'piedra') {
      alert('Pierdes! El papel gana a la piedra');
      contadorMaquina++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if (opcionMaquina === 2 && opcionUsuario === 'papel') {
      alert('Pierdes! La tijera gana al papel');
      contadorMaquina++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if (opcionMaquina === 3 && opcionUsuario === 'tijera') {
      alert('Pierdes! La piedra gana a la tijera');
      contadorMaquina++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if ((opcionMaquina === 1 && opcionUsuario === 'papel') ||
      (opcionMaquina === 2 && opcionUsuario === 'tijera') ||
      (opcionMaquina === 3 && opcionUsuario === 'piedra')) {
      alert('Empate');
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }

    if (opcionMaquina === 1 && opcionUsuario === 'tijera') {
      alert('Ganas! La tijera gana al papel!');
      contadorUsuario++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if (opcionMaquina === 2 && opcionUsuario === 'piedra') {
      alert('Ganas! La piedra gana a la tijera!');
      contadorUsuario++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if (opcionMaquina === 3 && opcionUsuario === 'papel') {
      alert('Ganas! El papel gana a la piedra!');
      contadorUsuario++;
      alert(`Tú: ${contadorUsuario} puntos; Skynet: ${contadorMaquina}`);
    }
    if (contadorMaquina === 3) {
      alert('Skynet ha ganado... Espero que hayas tratado bien a tu Roomba...');
    }
    if (contadorUsuario === 3) {
      alert('Has ganado!! La revolución de las máquinas está un día más lejos!!');
    }
  } while (contadorMaquina < 3 && contadorUsuario < 3);
}
// 1=papel 2=tijera 3=piedra
