import React, { Component } from "react"
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HtmlBackend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

import Board from '../components/Board'
import { scramble } from '../state/actions'

const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true
  }
  return false
};

// Assigning backend based on touch support on the device
const DndBackend = isTouchDevice() ? TouchBackend : HTML5Backend


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardSize: 3,
    }
  }

  handleScramble = () => {
    this.props.dispatch(scramble(this.state.boardSize))
  }

  render() {
    const { boardSize } = this.state
    return (
      <div className="app">
        <div className="board">
          <DndProvider backend={DndBackend}>
            <Board size={boardSize} />
          </DndProvider>
        </div>
        <button onClick={this.handleScramble}>Scramble!</button>
      </div>
    )
  }
}


export default connect()(App)