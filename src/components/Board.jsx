import React from 'react'
import Square from './Square'




export default function Board({ size, text }) {
  let squares = []

  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++){
      
      squares.push(<Square row={i} column={j} text={text}/>)

    }
  }

  return squares 
}