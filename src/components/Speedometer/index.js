// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.state = 200
    }
  }

  applyBrake = () => {
    const {speed} = this.state
    if (speed > 0 || speed <= 200) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.state = 0
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.accelerate}
            className="accelerate-button"
            type="submit"
          >
            Accelerate
          </button>
          <button
            onClick={this.applyBrake}
            className="brake-button"
            type="submit"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
