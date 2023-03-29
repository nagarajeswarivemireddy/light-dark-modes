/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}

  onSubscribe = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state

    const {modelClassName} = isLight ? 'light-container' : 'dark-container'
    const {buttonText} = isLight ? 'LightMode' : 'DarkMode'

    return (
      <div className="app-container">
        <div className={modelClassName}>
          <h1>Click To Change Mode</h1>

          <button
            type="button"
            className="subscribe-button"
            onClick={this.onSubscribe}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
