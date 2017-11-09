window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click', addX);  
  var button = document.getElementById('button');
  button.addEventListener('click', reset);
  var message = document.getElementById("message");
  message.addEventListener('click', reset);
}

var centinel = true;
function addX(event) { 
    if (event.target.matches('.cell') && event.target.textContent === ''){
        if (centinel) {
          event.target.textContent = 'x';
        }
        else {
          event.target.textContent = 'o';
        }
        centinel = !centinel;
        winer();
    }
};

var cell1 = document.getElementById("cell-0-0");
    cell2 = document.getElementById("cell-0-1");
    cell3 = document.getElementById("cell-0-2");
    cell4 = document.getElementById("cell-1-0");
    cell5 = document.getElementById("cell-1-1");
    cell6 = document.getElementById("cell-1-2");
    cell7 = document.getElementById("cell-2-0");
    cell8 = document.getElementById("cell-2-1");
    cell9 = document.getElementById("cell-2-2");

function winer() {
    matrix = [[cell1.textContent, cell2.textContent, cell3.textContent],
             [cell4.textContent, cell5.textContent, cell6.textContent],
             [cell7.textContent, cell8.textContent, cell9.textContent]];
    /*Se iteran horizontales y verticales*/
    for (i = 0; i < 3; i++){ 
      if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]){
        if (matrix[i][0] == 'x') {
          message.textContent = "Gana el jugador 1";
        } 
        else if (matrix[i][0] == 'o') {
          message.textContent = "Gana el jugador 2";
        }
      } 
      else if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]){
        if (matrix[0][i] == 'x'){
          message.textContent = "Gana el jugador 1";
        } 
        else if (matrix[0][i] == 'o'){
          message.textContent = "Gana el jugador 2";
        }
      }
    } 
    /*Se iteran diagonales*/
    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]){
        if (matrix[0][0] == 'x'){
          message.textContent = "Gana el jugador 1";
        } else if (matrix[0][0] == 'o'){
          message.textContent = "Gana el jugador 2";
        }
    } else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]){
        if (matrix[0][2] == 'x'){
          message.textContent = "Gana el jugador 1";
        } else if (matrix[0][2] == 'o'){
          message.textContent = "Gana el jugador 2";
        }
    }
    for (i = 0; i < 3; i++){
        for (a = 0; a < 3; a++){
            if (matrix[i][a].length == 0){
                return 0;
            }
        }
    }
    message.textContent = "¡Empate!";
}

function reset() {
  cell1.textContent = '';
  cell2.textContent = '';
  cell3.textContent = '';
  cell4.textContent = '';
  cell5.textContent = '';
  cell6.textContent = '';
  cell7.textContent = '';
  cell8.textContent = '';
  cell9.textContent = '';   
  message.textContent = '';  
}



