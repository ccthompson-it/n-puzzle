import React, { Component } from "react"
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-html5-backend'
import { Link } from 'gatsby'

import Board from '../components/Board'
import { scramble } from '../state/actions'

const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
}

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend

function boardStyle(size) {
  const width = (100 * size) + (2 * size)
  return {
    width,
    display: 'flex',
    flexFlow: 'wrap',
    flexDirection: 'row'
  }
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.handleScramble()
  }

  handleScramble = () => {
    const { size } = this.props.location.state
    this.props.dispatch(scramble(size))
  }

  render() {
    const size = this.props.location.state ? this.props.location.state.size : 3
    return (
      <div className="app">
        <p className="middle-text">VVVVV Empty Space goes Here!</p>
        <div className="board" style={boardStyle(size)}>
          <DndProvider backend={backendForDND}>
            <Board size={size} />
          </DndProvider>
        </div>
        <button className="fixed-button scramble" onClick={this.handleScramble}>Scramble!</button>
        <Link to="/">
          <button className="fixed-button back">Change Board Size</button>
        </Link>
      </div>
    )
  }
}


export default connect()(App)


