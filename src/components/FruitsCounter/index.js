// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="container">
        <div className="container-2">
          <h1 className="heading">
            Bob ate <span className="banana-count">{mango}</span> mangoes
            <span className="banana-count"> {banana}</span> bananas
          </h1>
          <div className="fruit-image-container">
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
