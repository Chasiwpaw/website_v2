import React from 'react'
import './style.scss'

// READ: https://mxstbr.blog/2017/02/react-children-deepdive/#enforcing-a-single-child
class Circle extends React.Component {
  state = {
    currentDegree: 0
  }

  componentWillMount() {
    this.setState({
      currentDegree: this.props.initialDegree
    })
  }

  // moveCircle = direction => {
  //   const {
  //     thetaArray,
  //     rotation,
  //     slideCount,
  //     theta
  //   } = this.state
  //   const carousel = document.querySelector(
  //     '.carousel'
  //   )
  //   const carousel_item = carousel.querySelector(
  //     '.item'
  //   )
  //   let newThetaArray = []
  //   for (let i = 0; i < slideCount; i++) {
  //     const value =
  //       thetaArray[i] + direction * theta
  //     carousel_item.children[
  //       i
  //     ].style.transform =
  //       'rotateY(' +
  //       value +
  //       'deg) translateZ(' +
  //       rotation +
  //       'px)'
  //     newThetaArray.push(value)
  //   }
  //
  //   this.setState({thetaArray: newThetaArray})
  // }
  //

  /**
   * Only compute currentDegree when props.position updates
   */
  componentWillReceiveProps(nextProps) {
    if (
      this.props.position !== nextProps.position
    ) {
      this.setState(prevState => {
        console.log({prevState})
        console.log(
          'nextCurrentDegree',
          prevState.currentDegree +
            this.props.theta * nextProps.position
        )
        return {
          currentDegree:
            prevState.currentDegree +
            this.props.theta * nextProps.position
        }
      })
    }
  }

  /**
   * Only rerender when currentDegree updates
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.currentDegree !==
      nextState.currentDegree
    )
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    const style = {
      color: 'pink',
      transform: `rotateY(${this.state.currentDegree}deg) translateZ(${this.props.rotation}px)`
    }
    return (
      <div style={style} className="circle">
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Circle
