import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag, useDrop } from 'react-dnd'

import Overlay from './Overlay'


function moveText(row, column, dispatch) {
  dispatch(changePosition(row, column))
}



function Square(props) {
  const { row, column, dispatch, match } = props

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.TEXT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: () => moveText(row, column, dispatch),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div className="square" ref={drop}>
      {match && <p ref={drag}>Drag Me!</p>}
      {isOver && <Overlay color="yellow" />}
    </div>
  )
}


export default connect()(Square)