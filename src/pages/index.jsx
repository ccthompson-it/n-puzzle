import React, { Component } from "react"
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Board from '../components/Board'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardSize: 3,
    }
  }


  render() {
    const { boardSize } = this.state
    const { position } = this.props
    return (
      <div className="app">
        <div className="board">
          <DndProvider backend={Backend}>
            <Board size={boardSize} text={position} />
          </DndProvider>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ position }) {
  return {
    position
  }
}

export default connect(mapStateToProps)(App)