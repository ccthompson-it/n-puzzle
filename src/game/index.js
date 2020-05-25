module.exports = {
  randArray,
  checkWin
}



function randArray(length) {
  let array = []
  for(let i=0; i<length; i++) { array.push(i) }

  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function checkWin(gameOrder) {
  for(let i=0; i<gameOrder.length; i++) {
    if(gameOrder[i] !== i) { return false }
  }
  return true
}