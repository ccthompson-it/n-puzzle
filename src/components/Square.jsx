import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { changePosition } from '../state/actions'


class Square extends Component {
    constructor(props) {
      super(props)
    }

    handleClick = () => {
      const { row, column, dispatch } = this.props
      dispatch(changePosition(row, column))
    }

    render() {
      const { match } = this.props
      return (
        <div className="square" onClick={this.handleClick}>
          {match && <p>Hello!</p>}
        </div>
      )
    }
  }


export default connect()(Square)