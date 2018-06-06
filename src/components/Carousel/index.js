import React from 'react'
import './style.scss'

class Carousel extends React.Component {
  state = {
    initiateCarousel: true,
    selectedSlide: 0,
    theta: 0,
    rotation: 0,
    slideCount: 0
  }

  componentDidMount() {
    const slideCount = this.props.children.length
    const theta = 360 / slideCount
    const rotation =
      (this.props.children[0].props.offsetWidth / 2) /
      Math.tan(theta / 2 * (Math.PI / 180))
    
    this.setState(() => ({
      theta,
      slideCount,
      rotation,
      initiateCarousel: true
    }))
  }

  handleNextOnClick = () => {
    this.setState(prevState => ({
      selectedSlide: -1
    }))
  }

  handleBackOnClick = () => {
    this.setState(prevState => ({
      selectedSlide: 1
    }))
  }

  renderChildren = () =>
    React.Children.map(
      this.props.children,
      (child, index) =>
        React.cloneElement(child, {
          name: this.props.name,
          rotation: this.state.rotation,
          theta: this.state.theta,
          position: this.state.selectedSlide,
          initialDegree: this.state.theta * index,
          index: index,
        })
    )

  render() {
    return (
      <div className="carousel">
        <a
          className="prev"
          onClick={this.handleBackOnClick}>
          &#10094;
        </a>
        <div className="item">
          {this.renderChildren()}
        </div>
        <a
          className="next"
          onClick={this.handleNextOnClick}>
          &#10095;
        </a>
      </div>
    )
  }
}

export default Carousel
