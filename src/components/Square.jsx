import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'

import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'


function handleClick(row, column, dispatch) {
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

  return (
    <div className="square" onClick={() => handleClick(row, column, dispatch)}>
      {match && <p ref={drag}> Hello!</p>}
    </div>
  )
}


export default connect()(Square)