import React, { Component, Fragment } from "react"



class Square extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { row, column, match } = this.props
    return (
      <div className="square">
        {match && <p>Hello!</p>}
      </div>
    )
  }
}


export default Square