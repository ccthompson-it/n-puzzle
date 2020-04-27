import React, { Component } from "react"
import { Link } from 'gatsby'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 4
    }
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  handleMessage = (e, message) => {
    alert(message)
    e.preventDefault()
  }

  handleClick = (e) => {
    if (this.state.size % 1 !== 0) {
      this.handleMessage(e, "Whole Numbers Only >:(")
    } else if (this.state.size < 3 || this.state.size > 6) {
      this.handleMessage(e, "Numbers 3 through 6 only pls >:(")
    }
  }

  render() {
    const { size } = this.state
    return (
      <div className="app">
        <h1>Choose Board Size!</h1>
        <input type="number" value={size} onChange={this.handleChange} />
        <Link to='/game/' state={{ size }} onClick={this.handleClick}>
          <button id="size-button">Play!</button>
        </Link>
      </div>
    )
  }
}

export default App