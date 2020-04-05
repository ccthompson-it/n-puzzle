import React, { Component, Fragment } from "react"
import { DndProvider } from 'react-dnd'

import Board from '../components/Board'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardSize: 3,
      text: {
        x: 0,
        y: 0
      }
    }
  }


  render() {
    const { boardSize, text } = this.state
    return (
      <div className="app">
        <div className="board">
          <Board size={boardSize} text={text} />
        </div>
      </div>
    )
  }
}


export default App