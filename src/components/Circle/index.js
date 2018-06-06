import React from 'react'
import './style.scss'

// READ: https://mxstbr.blog/2017/02/react-children-deepdive/#enforcing-a-single-child
class Circle extends React.Component {
  state = {
    currentDegree: 0,
    initialized: false
  }

  /**
   * Only compute currentDegree when props.position updates
   */
  componentWillReceiveProps(nextProps) {
    if(!this.state.initialized) {
      this.setState(prevState => ({
        currentDegree: nextProps.initialDegree,
        initialized: true
      }))
    }
    this.setState(prevState => ({
      currentDegree: prevState.currentDegree +
      (this.props.theta * nextProps.position)
    }))
  }

  /**
   * Only rerender when currentDegree updates
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.currentDegree !== nextState.currentDegree) || (this.props.rotation === 0)
  }

  render() {
    const style = {
      transform: `rotateY(${this.state.currentDegree}deg) translateZ(${this.props.rotation}px)`
    }
    return (
      <div style={style} className="slide">
        <div className="innerCircle">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    )
  }
}

export default Circle
