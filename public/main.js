let playerO = []
let playerX = []
let unplayedSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let moveCounter = 0
let resetButton = () => {
  window.location.reload(true)
}
const checkForWinner = () => {
  if (
    (playerX.includes(0) && playerX.includes(1) && playerX.includes(2)) ||
    (playerX.includes(0) && playerX.includes(4) && playerX.includes(8)) ||
    (playerX.includes(0) && playerX.includes(3) && playerX.includes(6)) ||
    (playerX.includes(1) && playerX.includes(4) && playerX.includes(7)) ||
    (playerX.includes(2) && playerX.includes(5) && playerX.includes(8)) ||
    (playerX.includes(2) && playerX.includes(4) && playerX.includes(6)) ||
    (playerX.includes(3) && playerX.includes(4) && playerX.includes(5)) ||
    (playerX.includes(6) && playerX.includes(7) && playerX.includes(8))
  ) {
    document.querySelector('.instructions').innerHTML = 'Player X Wins!!!'
    let img = document.createElement('img')
    img.src =
      'https://media1.tenor.com/images/2511f398488c7c4a7618848d2e97afdc/tenor.gif?itemid=5436852'
    img.id = 'win'
    let board = document.querySelector('.ticTacToeBoard')
    document.querySelector('.board').replaceChild(img, board)
  }
  if (
    (playerO.includes(0) && playerO.includes(1) && playerO.includes(2)) ||
    (playerO.includes(0) && playerO.includes(4) && playerO.includes(8)) ||
    (playerO.includes(0) && playerO.includes(3) && playerO.includes(6)) ||
    (playerO.includes(1) && playerO.includes(4) && playerO.includes(7)) ||
    (playerO.includes(2) && playerO.includes(5) && playerO.includes(8)) ||
    (playerO.includes(2) && playerO.includes(4) && playerO.includes(6)) ||
    (playerO.includes(3) && playerO.includes(4) && playerO.includes(5)) ||
    (playerO.includes(6) && playerO.includes(7) && playerO.includes(8))
  ) {
    document.querySelector('.instructions').innerHTML = 'Player O Wins!!!'
    let img = document.createElement('img')
    img.src =
      'https://media1.tenor.com/images/2511f398488c7c4a7618848d2e97afdc/tenor.gif?itemid=5436852'
    img.id = 'win'
    let board = document.querySelector('.ticTacToeBoard')
    document.querySelector('.board').replaceChild(img, board)
  }
  if (moveCounter === 9) {
    document.querySelector('.instructions').innerHTML = 'Tie!!!'
  }
}
let pickSquare0 = () => {
  if (unplayedSpaces.includes(0)) {
    let arrayPosition = unplayedSpaces.indexOf(0)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(0)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space0').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(0)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space0').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare1 = () => {
  if (unplayedSpaces.includes(1)) {
    let arrayPosition = unplayedSpaces.indexOf(1)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(1)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space1').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(1)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space1').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare2 = () => {
  if (unplayedSpaces.includes(2)) {
    let arrayPosition = unplayedSpaces.indexOf(2)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(2)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space2').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(2)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space2').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}

let pickSquare3 = () => {
  if (unplayedSpaces.includes(3)) {
    let arrayPosition = unplayedSpaces.indexOf(3)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(3)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space3').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(3)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space3').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare4 = () => {
  if (unplayedSpaces.includes(4)) {
    let arrayPosition = unplayedSpaces.indexOf(4)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(4)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space4').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(4)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space4').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare5 = () => {
  if (unplayedSpaces.includes(5)) {
    let arrayPosition = unplayedSpaces.indexOf(5)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(5)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space5').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(5)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space5').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare6 = () => {
  if (unplayedSpaces.includes(6)) {
    let arrayPosition = unplayedSpaces.indexOf(6)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(6)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space6').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(6)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space6').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare7 = () => {
  if (unplayedSpaces.includes(7)) {
    let arrayPosition = unplayedSpaces.indexOf(7)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(7)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space7').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(7)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space7').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}
let pickSquare8 = () => {
  if (unplayedSpaces.includes(8)) {
    let arrayPosition = unplayedSpaces.indexOf(8)
    unplayedSpaces.splice(arrayPosition, 1)
    if (moveCounter % 2 === 1) {
      playerO.push(8)
      let img = document.createElement('img')
      img.src = 'assets/o.jpg'
      document.getElementById('space8').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player X go!'
    } else {
      playerX.push(8)
      let img = document.createElement('img')
      img.src = 'assets/x.jpg'
      document.getElementById('space8').appendChild(img)
      document.querySelector('.instructions').innerHTML = 'Player O go!'
    }
    moveCounter++
    checkForWinner()
  }
}

//  Player X
//  - player X goes first
// - player X now picks a space(square)
//   - this space is now removed from future choices(array) and stored(in player array).
//      X is displyed on board if it is in players choices
//        - determine a winner by checking winning conditions
//          - winning conditions are [0, 1, 2], [3, 4, 5], [6, 7, 8],
//           [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
//           - go through the list of winning conditions one at time
//           if the player array contains a 0 check if the player array contains a 1 if so check if player array contains a 2 if so the player wins
//           if the player array contains a 3 check if the player array contains a 4 if so check if player array contains a 5 if so the player wins
//           if the player array contains a 6 check if the player array contains a 7 if so check if player array contains a 8 if so the player wins
//           if the player array contains a 0 check if the player array contains a 3 if so check if player array contains a 6 if so the player wins
//           if the player array contains a 1 check if the player array contains a 4 if so check if player array contains a 7 if so the player wins
//           if the player array contains a 2 check if the player array contains a 5 if so check if player array contains a 8 if so the player wins
//           if the player array contains a 2 check if the player array contains a 4 if so check if player array contains a 6 if so the player wins
//           if the player array contains a 0 check if the player array contains a 4 if so check if player array contains a 8 if so the player wins

//        - check make sure there are still available spaces.
//         - if no available spaces determine a DRAW
//         - if winning conditions have not been met or there are available spaces.
//           it is now player0 turn.

const main = () => {
  document.querySelector('.resetButton').addEventListener('click', resetButton)
  document.querySelector('#space0').addEventListener('click', pickSquare0)
  document.querySelector('#space1').addEventListener('click', pickSquare1)
  document.querySelector('#space2').addEventListener('click', pickSquare2)
  document.querySelector('#space3').addEventListener('click', pickSquare3)
  document.querySelector('#space4').addEventListener('click', pickSquare4)
  document.querySelector('#space5').addEventListener('click', pickSquare5)
  document.querySelector('#space6').addEventListener('click', pickSquare6)
  document.querySelector('#space7').addEventListener('click', pickSquare7)
  document.querySelector('#space8').addEventListener('click', pickSquare8)
}
document.addEventListener('DOMContentLoaded', main)
