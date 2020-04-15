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

  render() {
    const { size } = this.state
    return (
      <div className="app">
        <h1>Choose Board Size!</h1>
        <input type="number" value={size} onChange={this.handleChange} />
        <Link to='/game/' state={{ size }}>
          <button id="size-button">Play!</button>
        </Link>
      </div>
    )
  }
}

export default App