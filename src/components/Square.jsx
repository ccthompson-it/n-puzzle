import React from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag, useDrop } from 'react-dnd'



function moveText(id, num, emptySquare, dispatch) {
  dispatch(changePosition(id, num, emptySquare.id))
}

function checkDroppable(emptySquare, x, y, selfEmpty) {
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
  
  let color = null

  if( canDrop && !isOver ) { color = "rgba(255, 255, 0, 0.7)" }
  if( !canDrop && isOver ) { color = "rgba(255, 0, 0, 0.7)" }
  if( canDrop && isOver ) { color = "rgba(0, 255, 0, 0.7)" }

  return (
  <div className="square" ref={drop} style={{backgroundColor: color}}>
      <div className="draggable-container" ref={drag}>
        {!empty && <p className="middle-text" >{isDragging ? 'Weeee!' : num}</p>}
      </div>
    </div>
  )
}

export default connect()(Square)