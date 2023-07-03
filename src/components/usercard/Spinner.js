import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
