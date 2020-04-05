import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag, useDrop } from 'react-dnd'


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

  const [, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: () => moveText(row, column, dispatch),
  })

  return (
    <div className="square" ref={drop}>
      {match && <p ref={drag}> Hello!</p>}
    </div>
  )
}


export default connect()(Square)