import React from "react";

export default class Overcast extends React.Component {
  state = {
    scrollTop: 0,
    offsetHeight: "0"
  }
  handleScroll = () => {
    let element = document.getElementById(`${this.props.id}`);
    let distance = element.getBoundingClientRect().top;
    let elementHeight = element.offsetHeight;
    this.setState({
      scrollTop: distance,
      offsetHeight: elementHeight
    })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render = () => {
    let styles = {
      backgroundColor: "#111",
      position: "absolute",
      width: 100+"%",
      height: 100/this.props.height +"%",
      opacity: this.state.offsetHeight > 0 ?
        -this.state.scrollTop / this.state.offsetHeight :
        -this.state.scrollTop / 300 ,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      top:0,
      left: 0,
      zIndex: -1
    }
    return (
      <div id={this.props.id} style={styles}>{this.props.children}</div>
    )
  }
}
