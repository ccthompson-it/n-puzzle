import React from 'react'
import Square from './Square'
import { connect } from 'react-redux'


function getEmptySquare(array, size) {
  let pos = {}
  for(let i=0; i<array.length; i++) {
    if(array[i] === 0) {
      pos.y = i % size
      pos.x = (i - pos.y) / size
      pos.id = i
    }
  }
  return pos
}


function Board({ size, numOrder }) {
  let squares = []
  let emptySquare = getEmptySquare(numOrder, size)

  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++){
      let id = size * i + j
      squares.push(<Square row={i} column={j} id={id} num={numOrder[id]} emptySquare={emptySquare} key={id}/>)
    }
  }

  return squares 
}

function mapStateToProps({ numOrder }) {
  return {
    numOrder
  }
}

export default connect(mapStateToProps)(Board)