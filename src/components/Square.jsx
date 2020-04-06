import React from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag, useDrop } from 'react-dnd'

import Overlay from './Overlay'




function moveText(id, num, emptySquare, dispatch) {
  dispatch(changePosition(id, num, emptySquare.id))
}

function checkDroppable(emptySquare, x, y, selfEmpty) {
  console.log(emptySquare, x, y, selfEmpty)
  if (selfEmpty) {
    if ((emptySquare.x + 1 === x || emptySquare.x - 1 === x) && emptySquare.y === y) { return true }
    if ((emptySquare.y + 1 === y || emptySquare.y - 1 === y) && emptySquare.x === x) { return true }
  }
  return false
}



function Square(props) {
  const { row, column, dispatch, id, num, emptySquare } = props

  const empty = num === 0 ? true : false

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TEXT,
      id,
      num,
      row,
      column
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: (res) => { moveText(res.id, res.num, emptySquare, dispatch) },
    canDrop: (res) => checkDroppable(emptySquare, res.row, res.column, empty),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  return (
    <div className="square" ref={drop}>
      {!empty && <p className="middle-text" ref={drag}>{isDragging ? 'Weeee!' : num}</p>}
      {canDrop && !isOver && <Overlay color="yellow" />}
      {!canDrop && isOver && <Overlay color="red" />}
      {canDrop && isOver && <Overlay color="green" />}
    </div>
  )
}

export default connect()(Square)