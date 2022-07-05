{
  function playGame(playerInput) {

      clearMessages();

      const getMoveName = function getMoveName(argMoveId) {
          if (argMoveId == 1) {
              return 'kamień';
      }
          if(argMoveId == 2) {
              return 'papier';
      }
          if (argMoveId == 3) {
              return 'nożyce';
      }
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
      }
      const randomNumber = Math.floor(Math.random() * 3 + 1),
          argComputerMove = getMoveName(randomNumber),
          argPlayerMove = getMoveName (playerInput);

      console.log('Wylosowana liczba to: ' + randomNumber);

      console.log('Gracz wpisał: ' + playerInput);


      const displayResult = function displayResult(argComputerMove, argPlayerMove) {

          printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

          if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
              return 'Wygrywasz!';
          }
          if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
              return 'Wygrywasz!';
          }
          if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
              return 'Wygrywasz!';
          }
          if (argComputerMove == argPlayerMove) {
              return 'Remis';
          } else {
              return 'Przegrywasz!';
          }
      }
      printMessage('Wynik to ' + displayResult(argComputerMove, argPlayerMove));
  }
  document.getElementById('play-rock').addEventListener('click', function() {
      playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
      playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
      playGame(3);
  });
}

/*

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}

*/



/*

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
  playerMove = 'niepoprawna liczba';
} 

*/


