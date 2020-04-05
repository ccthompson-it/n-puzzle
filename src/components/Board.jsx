import React from 'react'
import Square from './Square'


function positionMatch (text, x, y) {
  console.log(text, x, y)
  if (text.x == x && text.y == y) { return true }
  else { return false } 
}

export default function Board({ size, text }) {
  let squares = []
  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++){
      let match = positionMatch(text, i, j)
      squares.push(<Square row={i} column={j} match={match}/>)
    }
  }
  return squares 
}