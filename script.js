const santa = document.querySelector('#santa'); // Santa Claus
let currentRow = 2;  // Fila inicial de Santa
let currentCol = 5;  // Columna inicial de Santa

// Movimiento de Santa
function moveSanta(direction) {
    let newRow = currentRow;
    let newCol = currentCol;

    // Determinar la nueva posición según la dirección
    if (direction === 'arriba') {
        newRow = currentRow - 1;
    } else if (direction === 'abajo') {
        newRow = currentRow + 1;
    } else if (direction === 'izquierda') {
        newCol = currentCol - 1;
    } else if (direction === 'derecha') {
        newCol = currentCol + 1;
    }

    // Asegúrate de que las nuevas posiciones estén dentro de los límites de la tabla
    if (newRow < 0 || newCol < 0 || newRow >= 8 || newCol >= 6) {  // Ajusta los límites según el tamaño de tu tabla
        return;  // Si está fuera de los límites, no hacer nada
    }

    // Verificar si la celda destino está ocupada por barriles (tiene la clase 'th-5')
    const targetCell = document.querySelector(`.tr:nth-child(${newRow + 1}) .th-${newCol + 1}`);

    if (targetCell && !targetCell.classList.contains('th-5')) {
        // Si la celda no tiene barril, mover a Santa
        currentRow = newRow;
        currentCol = newCol;
        santa.style.top = (currentRow * 50) + 'px';  // Calculamos la posición Y
        santa.style.left = (currentCol * 50) + 'px'; // Calculamos la posición X
    }
}

// Eventos de los botones de movimiento
document.querySelector('button[onclick="moveSanta(\'arriba\')"]').addEventListener('click', function() {
    moveSanta('arriba');
});
document.querySelector('button[onclick="moveSanta(\'abajo\')"]').addEventListener('click', function() {
    moveSanta('abajo');
});
document.querySelector('button[onclick="moveSanta(\'izquierda\')"]').addEventListener('click', function() {
    moveSanta('izquierda');
});
document.querySelector('button[onclick="moveSanta(\'derecha\')"]').addEventListener('click', function() {
    moveSanta('derecha');
});