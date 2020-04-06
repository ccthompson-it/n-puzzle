import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag, useDrop } from 'react-dnd'

import Overlay from './Overlay'




function moveText(row, column, dispatch) {
  dispatch(changePosition(row, column))
}

function checkDroppable(text, x, y) {
  if ((text.x + 1 === x || text.x - 1 === x) && text.y === y) { return true } 
  if ((text.y + 1 === y || text.y - 1 === y) && text.x === x) { return true } 
  return false 
}

function checkMatch(text, x, y) {
  if (text.x === x && text.y === y) { return true }
  else { return false }
}




function Square(props) {

  const { row, column, dispatch, text } = props
  const match = checkMatch(text, row, column)
  const droppable = checkDroppable(text, row, column)


  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TEXT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: () => moveText(row, column, dispatch),
    canDrop: () => droppable,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="square" ref={drop}>
      {match && <p className="middle-text" ref={drag}>Drag Me!</p>}
      {canDrop && !isOver && <Overlay color="yellow" />}
      {!canDrop && isOver && !match && <Overlay color="red" />}
      {canDrop && isOver && <Overlay color="green" />}
    </div>
  )
}


export default connect()(Square)