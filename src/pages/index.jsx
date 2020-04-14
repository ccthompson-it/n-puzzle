import React, { Component } from "react"
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Board from '../components/Board'
import { scramble } from '../state/actions'


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
          <DndProvider backend={Backend}>
            <Board size={boardSize} />
          </DndProvider>
        </div>
        <button onClick={this.handleScramble}>Scramble!</button>
      </div>
    )
  }
}


export default connect()(App)