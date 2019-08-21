let board = [];
let currentTurn = 'X';
const WINNER_COUNT = 5;

function start() {
  for (let i = 0 ; i < 10; i++) {
    board[i] = [];
    for (let j = 0 ; j < 10; j++) {
      board[i][j] = '';
    }
  }
}


function draw() {
  let output = '<table>';
  for (let i = 0 ; i < board.length; i++) {
    output += '<tr>';
    for (let j = 0 ; j < board[i].length; j++) {
      output += '<td class="cell" onclick="clickCell(' + i + ', ' + j + ')">' +  board[i][j] + '</td>';
    }
    output += '</tr>';
  }
  output += '</table>';
  document.getElementById("display").innerHTML = output;
}

function clickCell(row, column) {
  board[row][column] = currentTurn;
  checkWinner(row, column);

  switchTurn();
  draw();

}

function switchTurn() {
  if (currentTurn === 'X') {
    currentTurn = 'O';
  } else {
    currentTurn = 'X';
  }
}


function checkWinner(row, column) {
  checkRow(row, column);
  // checkColumn();
  // checkCross1();
  // checkCross2();
}

function checkRow(row, column) {
  // debugger;
  let count = 1;
  let currentColumn = column;
  while (count < WINNER_COUNT) {
    if (
      board[row][column] === currentTurn

      && board[row][column] === board[row][column-1]

    ) {
      count++;
      column--;
    } else {
      break;
    }
  }

  column = currentColumn;
  while (count < WINNER_COUNT) {
    if (board[row][column] === currentTurn

      && board[row][column] === board[row][column+1]

    ) {
      count++;
      column++;
    } else {
      break;
    }
  }

  if (count == WINNER_COUNT) {
    alert(currentTurn + ' is winner');
  }
}


function checkColumn(row, column) {
  // debugger;
  let count = 1;
  let currentRow = row;
  while (count < WINNER_COUNT) {
    if (
      board[row][column] === currentTurn

      && board[row][column] === board[row-1][column]

    ) {
      count++;
      row--;
    } else {
      break;
    }
  }

  currentRow = row;
  while (count < WINNER_COUNT) {
    if (board[row][column] === currentTurn

      && board[row][column] === board[row+1][column]

    ) {
      count++;
      row++;
    } else {
      break;
    }
  }

  if (count == WINNER_COUNT) {
    alert(currentTurn + ' is winner');
  }
}

start();

draw();
