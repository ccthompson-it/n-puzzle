import React from 'react'
import Square from './Square'




export default function Board({ size }) {
  let squares = []

  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++){
      
      squares.push(<Square row={i} column={j} id={size*i+j} key={size*i+j}/>)

    }
  }

  return squares 
}